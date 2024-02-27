import { useState } from "react"

export default function Player({initialName, playerSymbol, isActive}){
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleClick(){
        setIsEditing((editing => !editing))
    }

    function handleChange(event){
        console.log(event)
        setPlayerName(event.target.value)
    }
    
    let editablePlayerName = <span className="player-name">{playerName}</span>
    // let buttonCaption = 'Edit'

    if (isEditing === true){
        editablePlayerName = <input type="text" required defaultValue={playerName} onChange={handleChange}/>
        // buttonCaption="Save"
    } 

    return(
        <li className={isActive}>
            <span>
                {editablePlayerName}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? 'Save': 'Edit'}</button>
        </li>
    )
} 