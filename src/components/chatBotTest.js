import React, {useState, useEffect} from 'react';
import Login from './login';
import ChatApp from './chatBotTestApp';
import '@progress/kendo-theme-material/dist/all.css';


function ChatBot() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [arr, setArr] = useState(['a','b']);

    function handleLogin(e) {
        e.preventDefault();
        setLoggedIn(true);    
    }
    function handleUsernameChange(e) {
        setUsername(e.target.value);
        // setArr(s => {
        //     s.push(e.target.value);
        //     console.log(s);
        //     return s;
        // });
    }
    // useEffect(() => {
    //     console.log("initial mount log");
    // }, [username]);   


    return !loggedIn ? (
        <div style={{margin: 'auto', width: '25%'}}>
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
