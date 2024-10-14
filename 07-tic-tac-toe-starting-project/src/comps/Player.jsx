import { useState } from "react";

const Player = ({ initialName, symbol, isActive, changePlayerName}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    const handleEditing = (e) => {
        setIsEditing(prev => !prev);
    
        if(isEditing){
            changePlayerName(symbol, playerName)
        };

    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">

                {
                    isEditing
                    ? <input 
                        type="text" value={playerName} 
                        onChange={(e) => setPlayerName(e.target.value)}
                         required
                    />
                    : <span className="player-name">{playerName}</span>
                }

                {
                    !isEditing 
                    && <span className="player-symbol">{symbol}</span>
                }

                <button 
                    onClick={handleEditing}>
                    {isEditing ? "Save" : 'Edit'}
                </button>

            </span>
        </li>
    );
}

export default Player;