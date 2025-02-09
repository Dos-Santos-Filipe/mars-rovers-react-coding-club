import { useState } from "react";
import { Plateau } from "./components/Plateau";
import { getPlateauSize } from "./mars-rovers-logic";

const input = ["5 5", "1 2 N", "LMLMLMLMM", "3 3 E", "MMRMMRMRRM"];
// type size = {
//   x: number;
//   y: number;
// };

// const Rover = (input: string[]) => {
//   const roverPosition = input[1].split(" ").map(Number);
//   return {rover.};
// };

interface InputAreaProps {
  onClick: (input: string[]) => void;
}

const InputArea: React.FC<InputAreaProps> = ({ onClick }) => {
  const [input, setInput] = useState([
    "5 5",
    "1 2 N",
    "LMLMLMLMM",
    "3 3 E",
    "MMRMMRMRRM",
  ]);
  const handleChange = (element: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(element.target.value.split("\n"));
  };

  return (
    <div>
      <textarea onChange={handleChange} />
      <button onClick={() => onClick(input)}>Go!</button>
    </div>
  );
};

function App() {
  const [plateauSize, setPlateauSize] = useState({ x: 0, y: 0 });
  const [rovers, setRovers] = useState(["2 2 N"]);

  console.log(rovers);

  const handleClick = (input: string[]) => {
    setPlateauSize(getPlateauSize(input));
    console.log("Tamanho do Plateau: ", plateauSize);
    
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
