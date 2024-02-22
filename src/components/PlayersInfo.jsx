import { useState } from "react"

export default function Player({playername, playerSymbol}){
    const [isEditing, setIsEditing] = useState(false);

    function handleClick(){
        setIsEditing(isEditing ? false: true)
    }
    
    let playerName = <span className="player-name">{playername}</span>
    // let buttonCaption = 'Edit'

    if (isEditing === true){
        playerName = <input type="text" required value={playername}/>
        // buttonCaption="Save"
    }

    return(
        <li>
            <span>
                {playerName}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? 'Save': 'Edit'}</button>
        </li>
    )
} 