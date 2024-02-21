import React, { useState } from "react";

export default function SuperRabbit({messageForMe, playerIsReady, onSendMessage }) {

    const [playerReady, setPlayerReady] = useState(false);
    const [message, setMessage] = useState('');

    const handleStart = () => {
        setPlayerReady(true);
        playerIsReady(true);
    }

    const handleInputMessage = (message) => {
        setMessage(message)
    }

    const sendMessage = () => {
        onSendMessage(message);
    }

    return (
        <div className="super-rabbit">
            <h2>Super Rabbit</h2>
            {
                playerReady ? <p className="player-ready">Ready</p> : <p>Not ready</p>
            }
            <button onClick={handleStart}>Start</button>
            <p>Message for me: {messageForMe}</p>
            <div>
                <input
                    type="text"
                    value={message}
                    onInput={(e) => handleInputMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    );
}