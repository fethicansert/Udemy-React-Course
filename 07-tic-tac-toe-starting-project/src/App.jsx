import Player from "./comps/Player"
import { useState } from "react"
function App() {
 
  return <main>
    <div id="game-container">
      <ol id="players">
        <Player initialName={'player1'} symbol={'X'}></Player>
        <Player initialName={'player2'} symbol={'Y'}></Player>
      </ol>
    </div>
  </main>
}

export default App
