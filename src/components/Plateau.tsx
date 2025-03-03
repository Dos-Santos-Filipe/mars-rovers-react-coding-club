import { Rover } from "../mars-rovers-logic";
type size = {
  x: number;
  y: number;
};

type PlateauProps = {
  size: size;
  position: Rover[];
};

export const Plateau = ({ size, position }: PlateauProps) => {
  const { x, y } = size;
  //const { x: roverX, y: roverY, direction: roverDirection} = position[0];
  //const rover = { x: Number(roverX), y: Number(roverY), direction: roverDirection };
  const grid: JSX.Element[] = [];

  for (let i = 0; i < y; i++) {
    const row: JSX.Element[] = [];
    for (let j = 0; j < x; j++) {
      const rover = position.find((rover) => rover.x === j && rover.y === i);
      row.push(
        <div
          key={`${i}-${j}`}
          style={{
            border: "1px solid red",
            width: "20px",
            height: "20px",
            textAlign: "center",
          }}
        >
          {rover ? rover.direction : ""}
        </div>
      );
    }
    grid.push(
      <div key={`row-${i}`} style={{ display: "flex" }}>
        {row}
      </div>
    );
  }

  return <div>{grid}</div>;
};
