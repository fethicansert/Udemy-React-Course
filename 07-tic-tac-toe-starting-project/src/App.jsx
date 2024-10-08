import GameBoard from "./comps/GameBoard"
import Log from "./comps/Log";
import Player from "./comps/Player"
import GameOver from './comps/GameOver'
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivaPlayer(gameTurns) {
  console.log(initialGameBoard);
  
  
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  };

  return currentPlayer;
}

function App() {

  const [gameTurns, setGameTurns] = useState([]);
  console.log(gameTurns);
  

  const currentPlayer = deriveActivaPlayer(gameTurns);

  let gameBoard = [...initialGameBoard];

  let winner;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {

    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const sencondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];


    if (
      firstSquareSymbol &&
      firstSquareSymbol === sencondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner

  const handleSquare = (rowIndex, colIndex) => {

    setGameTurns(prevTurns => {
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns];

      return updatedTurns;

    })
  };

  function hadleRestart (){
    setGameTurns([]);
  }

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">

        <Player
          initialName={'player1'}
          symbol={'X'}
          isActive={currentPlayer === 'X'}>
        </Player>

        <Player
          initialName={'player2'}
          symbol={'O'}
          isActive={currentPlayer === 'O'}>
        </Player>

      </ol>

      { (winner || hasDraw ) && <GameOver winner={winner} restart={hadleRestart}/>}

      <GameBoard
        board={gameBoard}
        onSelectSquare={handleSquare}
      />

      <Log turns={gameTurns} />
    </div>
  </main>




}

export default App
