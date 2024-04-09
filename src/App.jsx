import {useState} from 'react';
import Player from "./components/PlayersInfo"
import GameBoard from "./components/GameBoard"
import Log from './components/Log'

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState('X')
  
  function handleSelectSquare(){
    setActivePlayer((curActivePlayer) => curActivePlayer == 'X'? "O" : "X");
    
    setGameTurns((prevTurns)=> {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === 'X'){
        currentPlayer = 'O';
      }

      const updatedTurns = [
        {square:{row: rowIndex, col: colIndex}, player: activePlayer}, 
      ]

      return updatedTurns;
    })
  }
  return (
    <main>
        <div id='game-container'>
            <ol id='players' className='highlight-player'>
              <Player intialName="Player1" playerSymbol='O' isActive={activePlayer == "X"}/>
              <Player intialName="Player2" playerSymbol='X' isActive={activePlayer == "O"}/>
            </ol>
            <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
        </div>
        LOG
    </main>
  )
}

export default App
