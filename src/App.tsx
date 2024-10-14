import React, { useState } from 'react';
import './App.css';
import Block from "./components/Block";


function App() {
  var anynull = true;
  var display = false;
  const [status, SetState] = useState(false); 
  const [state, setstate] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");


  const handleBlockClick = (index: number) => {
    const stateCopy = Array.from(state);
    if (stateCopy[index] !== null) return;
    stateCopy[index] = currentTurn;
    //check if someone won
    const checkwinner = (state: any[]) => {
      const win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
      for (let i = 0; i < win.length; i++) {
        const [a, b, c] = win[i];
        if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) return true;
      }
      return false;
    }
    setCurrentTurn(currentTurn === "X" ? "0" : "X");
    setstate(stateCopy);
    const win = checkwinner(stateCopy);
    if (win) {
      alert(`${currentTurn} won the game`)
      SetState(true)
    }
 

  }
  
  function newgame(): void {
    const nullifiedArray = state.map(() => null);
    // Update the state with the new array
    setstate(nullifiedArray);
    SetState(false);
  }

 
  anynull = state.some(element => element === null);
  var winningStatus =  status;
  console.log(status);
  console.log(winningStatus);
  if(winningStatus || !anynull)
     display = true;// anyone is not null
  


  return (
    <div className="board">
      <h1>Tic_Tac_Toe</h1>
      <div className="Row">
        <Block onClick={() => handleBlockClick(0)} value={state[0]} />
        <Block onClick={() => handleBlockClick(1)} value={state[1]} />
        <Block onClick={() => handleBlockClick(2)} value={state[2]} />
      </div>
      <div className="Row">
        <Block onClick={() => handleBlockClick(3)} value={state[3]} />
        <Block onClick={() => handleBlockClick(4)} value={state[4]} />
        <Block onClick={() => handleBlockClick(5)} value={state[5]} />
      </div>
      <div className="Row">
        <Block onClick={() => handleBlockClick(6)} value={state[6]} />
        <Block onClick={() => handleBlockClick(7)} value={state[7]} />
        <Block onClick={() => handleBlockClick(8)} value={state[8]} />
      </div>
      <div>
        {display && (
          <button onClick={() => newgame()} value="NewGame" id="newgame">NewGame</button>
        )}
      </div>
    </div>
  );
}
export default App;
