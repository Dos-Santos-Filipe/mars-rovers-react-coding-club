import { useState } from "react";

interface InputAreaProps {
  onClick: (input: string[]) => void;
}

export const InputArea: React.FC<InputAreaProps> = ({ onClick }) => {
  const [input, setInput] = useState([
    "10 10",
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
      <textarea style={{ width: "200px" , height: "100px" }} onChange={handleChange} value={input.join("\n")}/>
      <button onClick={() => onClick(input)}>Go!</button>
    </div>
  );
};