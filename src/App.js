import React from "react";
import { Board } from "./components/Board";
import { ScoreTable } from "./components/ScoreTable";

function App() {
  return (
    <div className="App">
      <ScoreTable/>
      <Board/>
    </div>
  );
}

export default App;
