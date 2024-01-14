import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import AboveGame from "./components/AboveGame";
import Game from "./components/Game";
import useLocalStorage from "./hook/useLocalStorage";

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setbestScore] = useLocalStorage("bestScore", 0);

  useEffect(() => {
    if (score > bestScore) {
      setbestScore(score);
    }
  });

  return (
    <>
      <div className="container">
        <Header score={score} bestScore={bestScore} />
        <AboveGame />
        <Game setScore={setScore} />
      </div>
    </>
  );
};

export default App;
