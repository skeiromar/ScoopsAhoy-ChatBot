import React, {useState, useEffect} from 'react';
import Chat from 'twilio-chat';
import { Chat as ChatUI } from '@progress/kendo-react-conversational-ui';
import {botReply} from '../utilities/botHelper.js';

function ChatApp(props) {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState({id: props.username, name: props.username});
    const [stateChannel, setStateChannel] = useState(null);
    const [botChannel, setBotChannel] = useState(null);

    const [stateClient, setStateClient] = useState(null);
    const [botClient, setBotClient] = useState(null);




    useEffect(() => {
        async function fetchAccessToken() {
            const res = await fetch('/chat/token', {
                method: "post",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded' 
                    // 'Accept': 'application/json',
                    // 'Content-Type': 'application/json'
                },
                body: `identity=${encodeURIComponent(props.username)}`
            });
            res
                .json()
                .then(res => Chat.create(res.token))
                .then(setupChatClient)
                .catch(handleError);

            const bot = await fetch('/chat/token', {
                    method: "post",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded' 
                    },
                    body: `identity=${encodeURIComponent("Captain Steve")}`
                });
                bot
                    .json()
                    .then(bot => Chat.create(bot.token))
                    .then(setupBotClient)
                    .catch(handleError);

        }

        fetchAccessToken();
    }, []);

    // componentWillUnmount
    useEffect(() => {
        return () => {
          console.log('will unmount');
          // we do not have reference to client here. WONT WORK
          stateClient.shutdown();
          botClient.shutdown();
        };
    }, []);

    function handleError(error) {
        console.error(error);
        setError("Could not load chat");
    }
    function setupChatClient(client) {
        setStateClient(client);
        let savedChannel;

        client.getChannelByUniqueName("general")
        .then(channel => channel)
        .catch(error => {
            if (error.body.code === 50300) {
                return client.createChannel({ uniqueName: 'general' });
              } else {
                handleError(error);
            }
        })
        .then(channel => {
            savedChannel = channel;
            return channel.join().catch(() => {});
        })
        .then(() => {
            setIsLoading(false);
            savedChannel.getMessages().then(messagesLoaded);
            savedChannel.on('messageAdded', messageAdded);
            setStateChannel(savedChannel);
        })
        .catch(handleError);
    }
    function twilioMessageToKendoMessage(message) {
        return {
            text: message.body,
            author: { id: message.author, name: message.author },
            timestamp: message.timestamp
        };
    }
    function messagesLoaded(messagePage) {
        // debugger
        setMessages(messagePage.items.map(twilioMessageToKendoMessage));
    }
    function messageAdded(message) {
        // debugger
        setMessages(msgs => {
            msgs.push(twilioMessageToKendoMessage(message));
            return msgs;
        });

        // setMessages([...messages, twilioMessageToKendoMessage(message)]);
    }


    function sendMessage(event) {
        // this.channel will not work because 
        // this method should not have access to 
        // this.method.
        stateChannel.sendMessage(event.message.text);
        let userMessage = event.message.text;
        let zip = userMessage.toLowerCase().slice(-5);

        if (userMessage.toLowerCase().includes('ice cream') && !isNaN(zip)) {

            fetch(`https://api.foursquare.com/v2/venues/explore?client_id=WND4VTUYZXZ3QMEB213BRXXYQ2M5PPX2EI14VXAUTDAFJPN3&client_secret=R4YVYB1H1QZUC1AC4OIPLKLVGV3G25SBGPHZWZB0PAFPOKMC&v=20180323&near=${parseInt(zip)}&query=[ice cream]&radius=250`)
            .then(res => res.json())
            .then(data => {
                // data.response.groups
                data.response.groups[0].items.forEach(e => {
                    // e.venue.name, .formattedAddress
                    let val = `Ice Cream Shop: ${e.venue.name} at ${e.venue.location.formattedAddress[0]}, ${e.venue.location.formattedAddress[1]}, ${e.venue.location.formattedAddress[2]}`;
                    botChannel.sendMessage(val);
            
                    return val;
                });
            })
            .catch(error => console.log(error));
        } else {
            const botHelped = botReply(userMessage);
            setTimeout(function() {
                botChannel.sendMessage(botHelped);
            }, 300);
        }
        // botChannel.sendMessage(botHelped);
    }

    
    // bot logic 
    function setupBotClient(client) {
        setBotClient(client);
        let savedBotChannel;

        client.getChannelByUniqueName("general")
        .then(channel => channel)
        .then(channel => {
            savedBotChannel = channel;
            return channel.join().catch(() => {});
        })
        .then(() => {
            savedBotChannel.getMessages().then(messagesLoaded);
            savedBotChannel.on('botMessageAdded', botMessageAdded);
            setBotChannel(savedBotChannel);
        })
        .catch(handleError);
    }
    function botMessageAdded(msg) {

        setMessages(msgs => {
            // msgs.push(twilioMessageToKendoMessage(msg));

            return [...msgs, twilioMessageToKendoMessage(msg)];
        });
        setUser(user);
    }


    return error ? (
        <p>{error}</p>
    ) : isLoading ? (
        <p>Loading chat...</p>
    ) : (
        <ChatUI
        user={user}
        messages={messages}
        onMessageSend={sendMessage}
        width={500}
        />
    );
}

export default ChatApp;
