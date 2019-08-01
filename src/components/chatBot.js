import React, {useState, useEffect} from 'react';
import Login from './login';
import ChatApp from './chatBotApp';
import '@progress/kendo-theme-material/dist/all.css';


function ChatBot() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    function handleLogin(e) {
        e.preventDefault();
        setLoggedIn(true);    
    }
    function handleUsernameChange(e) {
        // updates username as one types in the username field
        setUsername(e.target.value);

    }

    // renders the login component if not logged in, else the Chat App itself
    return !loggedIn ? (
        <div style={{width: '100%'}}>
            <Login 
            handleLogin={handleLogin}
            handleUsernameChange={handleUsernameChange}
            username={username}
            />
        </div>
    ) : (
        <div className="container" >
            <div className="row mt-3" >
                <ChatApp username={username} />
            </div>
        </div> 
    );
}

export default ChatBot;
