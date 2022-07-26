import React from "react";
import Board from "./Components/Board";

const App = () => {

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board/>
    </div>
  );
};

export default App;

// export default () => (   //a component must return a single elememt
// //<React.Fargment></React.Fargment>   or   <> </>
// <>
// <h1>Welcome to React Aniket Shaw Tic Tac toe App!</h1>
// <p>Hard to get more minimal than this React app.</p>
// </>
// );
