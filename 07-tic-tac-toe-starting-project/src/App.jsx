import GameBoard from "./comps/GameBoard"
import Log from "./comps/Log";
import Player from "./comps/Player"
import GameOver from './comps/GameOver'
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";


const PLAYERS = {
 X:'Player 1',
    O: 'Player2'
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivaPlayer(gameTurns) {

  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  };

  return currentPlayer;
}


function deriveGameBoard(gameTurns){

  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard

}

function deriveWinner(gameBoard, players){
  let winner;
  for (const combination of WINNING_COMBINATIONS) {

    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const sencondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];


    if (
      firstSquareSymbol &&
      firstSquareSymbol === sencondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
  
}

function App() {
  const [ players, setPlayers] = useState(PLAYERS);

  console.log(players);
  
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = deriveActivaPlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
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

  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevPlayers => ({...prevPlayers,[symbol]:newName}));
  }

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">

        <Player
          changePlayerName={handlePlayerNameChange}
          initialName={PLAYERS.X}
          symbol={'X'}
          isActive={currentPlayer === 'X'}>
        </Player>

        <Player
          changePlayerName={handlePlayerNameChange}
          setNewName={setPlayers}
          initialName={PLAYERS.O}
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
