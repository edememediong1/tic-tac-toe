import Player from "./components/PlayersInfo"
import GameBoard from "./components/GameBoard"

function App() {
  return (
    <main>
        <div id='game-container'>
            <ol id='players'>
              <Player intialName="Player1" playerSymbol='O'/>
              <Player intialName="Player2" playerSymbol='X'/>
            </ol>
            <GameBoard/>
        </div>
        LOG
    </main>
  )
}

export default App
