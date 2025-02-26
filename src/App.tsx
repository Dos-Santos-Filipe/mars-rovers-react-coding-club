import { useState, useEffect } from "react";
import { getMovementList, getPlateauSize } from "./mars-rovers-logic";

function App() {
  const [input, setInput] = useState("");
  const [plateau, setPlateau] = useState<
    ReturnType<typeof getPlateauSize> | undefined
  >();
  const [moveIndex, setMoveIndex] = useState(-1);
  const [movements, setMovements] = useState<
    { x: number; y: number; direction: string }[]
  >([]);
  const currentMove = movements[moveIndex];

  useEffect(() => {
    if (moveIndex < 0) return;

    const interval = setInterval(() => {
      console.log(currentMove);

      if (moveIndex >= movements.length - 1) {
        clearInterval(interval);
      }
      setMoveIndex(moveIndex + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [moveIndex]);

  const go = () => {
    const inputArray = input.split("\n");
    const movementList = getMovementList(inputArray);
    setPlateau(movementList.plateau);
    setMovements(movementList.movements);
    setMoveIndex(0);

    console.log(input);
  };

  return (
    <div>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={go}>Go!</button>
      {plateau && (
        <table>
          <body>
            {Array.from(Array(plateau.x).keys()).map((x) => (
              <tr key={x}>
                {Array.from(Array(plateau.y).keys()).map((y) => (
                  <td style={{ border: "1px solid red" }} key={y}>
                    {x === currentMove.x &&
                      y === currentMove.y &&
                      currentMove.direction}
                  </td>
                ))}
              </tr>
            ))}
          </body>
        </table>
      )}
    </div>
  );
}

export default App;
