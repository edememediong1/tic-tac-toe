import { useState } from "react"

export default function Player({playername, playerSymbol}){
    const [isEditing, setIsEditing] = useState(false);

    function handleClick(){
        setIsEditing(true)
    }
    
    let playerName = <span className="player-name">{playername}</span>
    
    if (isEditing === true){
        playerName = <input type="text" required />
    }

    return(
        <li>
            <span>
                {playerName}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={handleClick}>Edit</button>
        </li>
    )
} 