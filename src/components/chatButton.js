import React from 'react';
import "../styles/chatButtonStyle.css";

function ChatButton(props) {
    return (
        <div>
            <div id="btn-cnt" onClick={props.openModal}>
                <span>Chat with cap'n Steve</span>
            </div>
        </div>
    );
}

export default ChatButton;