import { useEffect } from "react";
import { addKeyObserver } from "../util/keyboard";
import { makeTile, moveTile } from "../util/tile";

const useMoveTile = ({ tileList, setTileList, setScore }) => {
  /**
   * 키보드 방향에 따라 새로운 숫자 추가 함수
   * @param {*} param0 x,y 좌표
   */
  const moveAndAdd = ({ x, y }) => {
    const newTileList = moveTile({ tileList, x, y });
    const score = newTileList.reduce(
      (acc, item) => (item.isMerged ? acc + item.value : acc),
      0
    );
    setScore((v) => v + score);
    const newTile = makeTile(newTileList);
    newTile.isNew = true;
    newTileList.push(newTile);
    setTileList(newTileList);
  };
  const moveUp = () => {
    moveAndAdd({ x: 0, y: -1 });
  };
  const moveDown = () => {
    moveAndAdd({ x: 0, y: 1 });
  };
  const moveLeft = () => {
    moveAndAdd({ x: -1, y: 0 });
  };
  const moveRight = () => {
    moveAndAdd({ x: 1, y: 0 });
  };
  useEffect(() => {
    addKeyObserver("up", moveUp);
    addKeyObserver("down", moveDown);
    addKeyObserver("left", moveLeft);
    addKeyObserver("right", moveRight);
    return () => {};
  });
};

export default useMoveTile;
