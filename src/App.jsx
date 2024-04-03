import {useState} from 'react';
import Player from "./components/PlayersInfo"
import GameBoard from "./components/GameBoard"

function App() {
  const [activePlayer, setActivePlayer] = useState('X')
  
  function handleSelectSquare(){
    setActivePlayer((curActivePlayer) => curActivePlayer == 'X'? "O" : "X");
  }
  return (
    <main>
        <div id='game-container'>
            <ol id='players' className='highlight-player'>
              <Player intialName="Player1" playerSymbol='O' isActive={activePlayer == "X"}/>
              <Player intialName="Player2" playerSymbol='X' isActive={activePlayer == "O"}/>
            </ol>
            <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
        </div>
        LOG
    </main>
  )
}

export default App
