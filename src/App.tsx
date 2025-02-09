import { useState } from "react";
import { Plateau } from "./components/Plateau";
import { InputArea } from "./components/InputArea";
import { getPlateauSize, getRovers, Rover } from "./mars-rovers-logic";

function App() {
  const [plateauSize, setPlateauSize] = useState({ x: 0, y: 0 });
  const [rovers, setRovers] = useState<Rover[]>([{ x: 0,  y: 0, direction: "N", command: [] }]);

  const handleClick = (input: string[]) => {
    setPlateauSize(getPlateauSize(input));
    setRovers(getRovers(input));
    
    console.log("Tamanho do Plateau: ", plateauSize);
    console.log("Posição Rover: ", rovers);
  };
  return (
    <>
      <h1>Mars Rovers</h1>
      <InputArea onClick={handleClick} />
      <Plateau size={plateauSize} position={rovers} />
    </>
  );
}

export default App;
