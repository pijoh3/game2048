import React from "react";
import Header from "./component/Header";
import AboveGame from "./component/AboveGame";
import Game from "./component/Game";

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <AboveGame />
        <Game />
      </div>
    </>
  );
};

export default App;
