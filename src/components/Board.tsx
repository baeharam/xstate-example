import { useMachine } from "@xstate/react";
import style from "./Board.module.scss";
import { boardMachine } from "./machine";

const board = Array(4)
  .fill(null)
  .map((_) =>
    Array(5)
      .fill(null)
      .map((_) => null)
  );

const Board = () => {
  const [state, send] = useMachine(boardMachine, {
    devTools: true,
  });

  return (
    <div className={style.table}>
      {board.map((row, index) => (
        <div key={index} className={style.row}>
          {row.map((_, rowIndex) => (
            <input className={style.cell} key={rowIndex} type="text" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
