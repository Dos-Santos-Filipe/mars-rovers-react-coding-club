import { useState } from "react";

type size = {
  x: number;
  y: number;
};


const Plateau = ({ size }: { size: size }) => {
  const { x, y } = size;
  const grid: JSX.Element[] = [];

  for (let i = 0; i < x; i++) {
    const row: JSX.Element[] = [];
    for (let j = 0; j < y; j++) {
      row.push(
        <div key={`${i}-${j}`} style={{ border: "1px solid red", width: "20px", height: "20px" }}></div>
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
  // const [size, setSize] = useState({ x: 5, y: 5 });

  const plateauSize = { x: 5, y: 5 };

  return (
    <>
      <h1>Mars Rovers</h1>
      <Plateau size={plateauSize} />
    </>
  );
}

export default App;
