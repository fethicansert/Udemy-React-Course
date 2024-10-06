import GameBoard from "./comps/GameBoard"
import Log from "./comps/Log";
import Player from "./comps/Player"
import { useState } from "react"
function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  const handleSquare = (rowIndex, colIndex) => {


    setActivePlayer(prev => prev === 'X' ? 'O' : 'X');
    console.log(activePlayer);
    
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O'
      };


      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns];

      return updatedTurns;

    })
  }


  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">

        <Player
          initialName={'player1'}
          symbol={'X'}
          isActive={activePlayer === 'X'}>
        </Player>

        <Player
          initialName={'player2'}
          symbol={'Y'}
          isActive={activePlayer === 'O'}>
        </Player>

      </ol>

      <GameBoard
        onSelectSquare={handleSquare}
        turns ={gameTurns}
      />

      <Log />
    </div>
  </main>
}

export default App
