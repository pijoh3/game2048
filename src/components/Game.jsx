import React, { useState } from "react";
import times from "lodash/times";
import { MAX_POS } from "../constant";
import { getInitilaTileList } from "../util/tile";
import useMoveTile from "../hook/useMoveTile";
import Tile from "./Tile";

const Game = ({setScore}) => {
  const [tileList, setTileList] = useState(getInitilaTileList);
  // up, down, left, right
  useMoveTile({ tileList, setTileList, setScore });
  return (
    <>
      <div className="game-container">
        <div className="grid-container">
          {times(MAX_POS, (idx) => (
            <div key={idx} className="grid-row">
              {times(MAX_POS, (idx2) => (
                <div key={idx2} className="grid-cell"></div>
              ))}
            </div>
          ))}
        </div>

        <div className="tile-container">
          {tileList.map((item) => (
            <Tile key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Game;
