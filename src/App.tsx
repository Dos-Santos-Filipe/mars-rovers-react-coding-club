import { useState } from "react";

const input = ["5 5", "1 2 N", "LMLMLMLMM", "3 3 E", "MMRMMRMRRM"];
type size = {
  x: number;
  y: number;
};

type PlateauProps = {
  size: size;
  position: string[];
}


const Plateau = ({ size, position } : PlateauProps) => {
  const { x, y } = size;
  const [roverX, roverY, roverDirection] = position[0].split(" ");
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

// const Rover = (input: string[]) => {
//   const roverPosition = input[1].split(" ").map(Number);
//   return {rover.}; 
// };

function App() {
  const [plateauSize, setPlateauSize] = useState<size>({ x: 5, y: 5 });
  const [rovers, setRovers] = useState(["2 2 N"]);

  console.log(rovers);
  
  return (
    <>
      <h1>Mars Rovers</h1>
      <Plateau size={plateauSize} position={rovers} />
    </>
  );
}

export default App;
