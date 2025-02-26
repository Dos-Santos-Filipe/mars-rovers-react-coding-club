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
  const [moveList, setMoveList] = useState<Rover[][]>([]);

  console.log("movelist: ", moveList[2]);
   

  useEffect(() => {
    if (moveList.length === 0) return;
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      moveList.forEach((rover) => {
        if (currentIndex < rover.length) {
          console.log(rover[currentIndex]);
        }
      });
      currentIndex++;
    }, 1000);
  
    return () => clearInterval(interval);
  }, [rovers]);
  


  const handleClick = (input: string[]) => {
    setPlateauSize(getPlateauSize(input));
    const roversList = getRovers(input);
    setRovers(roversList);
    setMoveList(handleMove(plateauSize, roversList));

    // console.log("Tamanho do Plateau: ", plateauSize);
    // console.log("Posição Rover: ", rovers);
  };

  const handleMove = (plateauSize: { x: number; y: number }, rovers: Rover[]) => {
    const list = moveRovers(plateauSize, rovers);
    console.log("list: ", list);
    
    return (list);
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
