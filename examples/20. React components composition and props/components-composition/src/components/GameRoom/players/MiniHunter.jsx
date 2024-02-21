import React, { useState } from "react";

export default function MiniHunter({messageForMe, playerIsReady, onSendMessage }) {

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
        <div className="mini-hunter">
            <h2>Mini Hunter</h2>
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