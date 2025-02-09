import { Rover } from "../mars-rovers-logic";
type size = {
    x: number;
    y: number;
  };

type PlateauProps = {
    size: size;
    position: Rover[];
  }

export const Plateau = ({ size, position } : PlateauProps) => {
    const { x, y } = size;
    const { x: roverX, y: roverY, direction: roverDirection} = position[0];
    const rover = { x: Number(roverX), y: Number(roverY), direction: roverDirection };
    const grid: JSX.Element[] = [];
    
    console.log(rover);
    
    for (let i = 0; i < x; i++) {
      const row: JSX.Element[] = [];
      for (let j = 0; j < y; j++) {
        const isHere = i === rover.x && j === rover.y;
        row.push(
          <div
            key={`${i}-${j}`}
            style={{ border: "1px solid red", width: "20px", height: "20px" }}
          >
            {isHere ? `${rover.direction}` : ""}
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