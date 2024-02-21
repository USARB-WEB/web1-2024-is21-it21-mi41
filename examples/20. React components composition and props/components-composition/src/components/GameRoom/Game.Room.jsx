import React, { useState } from "react";
import SuperRabbit from "./players/SuperRabbit";
import MiniHunter from "./players/MiniHunter";

export default function GameRoom() {

    const [gameStarted, setGameStarted] = useState(false);
    const [superRabitReady, setSuperRabitReady] = useState(false);
    const [miniHunterReady, setMiniHunterReady] = useState(false);
    const [messageForSuperRabbit, setMessageForSuperRabbit] = useState('');
    const [messageForMiniHunter, setMessageForMiniHunter] = useState('');

    const startGame = () => {
        if (superRabitReady && miniHunterReady) {
            setGameStarted(true);
        }
    }

    const handleSuperRabitIsReady = () => {
        setSuperRabitReady(true);
        startGame();
    }

    const handleMiniHunterIsReady = () => {
        setMiniHunterReady(true);
        startGame();
    }

    const handleSendMessageByMiniHunter = (message) => {
        console.log('Message from Mini Hunter:', message);
        setMessageForSuperRabbit(message);
    }

    const handleSendMessageBySuperRabbit = (message) => {
        console.log('Message from Super Rabbit:', message);
        setMessageForMiniHunter(message);
    }

    return (
        <div className="game-room">
            <h2>Game Room</h2>
            <>

                {
                    gameStarted ? <p className="game-started">Game Started</p> : <p>Game Not Started</p>
                }
                <SuperRabbit
                    messageForMe={messageForSuperRabbit}
                    playerIsReady={handleSuperRabitIsReady}
                    onSendMessage={handleSendMessageBySuperRabbit}
                />
                <MiniHunter
                    messageForMe={messageForMiniHunter}
                    playerIsReady={handleMiniHunterIsReady}
                    onSendMessage={handleSendMessageByMiniHunter}
                />
            </>
        </div>
    );
}