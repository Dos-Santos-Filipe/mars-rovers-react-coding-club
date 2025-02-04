import { useState } from "react";

type size = {
  x: number;
  y: number;
};

type Rover = {
  x: number;
  y: number;
};

const Plateau = ({ size }: { size: size }, { rovers }: { rovers: Rover[] }) => {
  const { x, y } = size;
  const grid: JSX.Element[] = [];

  for (let i = 0; i < x; i++) {
    const row: JSX.Element[] = [];
    for (let j = 0; j < y; j++) {
      const isHere = i === rover.x && j === rover.y;
      row.push(
        <div
          key={`${i}-${j}`}
          style={{ border: "1px solid red", width: "20px", height: "20px" }}
        >
          {isHere ? "X" : ""}
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

function App() {
  const [plateauSize, setPlateauSize] = useState<size>({ x: 5, y: 5 });
  const [rovers, setRovers] = useState<Rover[]>([{ x: 3, y: 3 }]);

  return (
    <>
      <h1>Mars Rovers</h1>
      <Plateau size={plateauSize} rovers={rovers}} />
    </>
  );
}

export default App;
