import { useEffect, useState } from "react";
import { Plateau } from "./components/Plateau";
import { InputArea } from "./components/InputArea";
import {
  getPlateauSize,
  getRovers,
  Rover,
  moveRovers,
} from "./mars-rovers-logic";

function App() {
  const [plateauSize, setPlateauSize] = useState({ x: 0, y: 0 });
  const [rovers, setRovers] = useState<Rover[]>([
    { x: 0, y: 0, direction: "N", command: [] },
  ]);
  const [moveList, setMoveList] = useState([]);
  const [currentCommand, setCurrentCommand] = useState(rovers.map(rover => rover.command));

  // useEffect(() => {
  //   const interval = setInterval(() => {

  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [currentCommand]);

  const handleClick = (input: string[]) => {
    setPlateauSize(getPlateauSize(input));
    const roversList = getRovers(input);
    handleMove(plateauSize, roversList);

    // console.log("Tamanho do Plateau: ", plateauSize);
    // console.log("Posição Rover: ", rovers);
  };

  const handleMove = (plateauSize: { x: number; y: number }, rovers: Rover[]) => {
    const teste = moveRovers(plateauSize, rovers);
    console.log("Position list: ", teste);

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
