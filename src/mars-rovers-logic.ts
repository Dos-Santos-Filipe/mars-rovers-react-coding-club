const directions = ["N", "E", "S", "W"];

export type Rover = {
  x: number;
  y: number;
  direction: string;
  command?: string[];
};

export const getPlateauSize = (input: string[]) => {
  const sizeArray = input[0].split(" ").map(Number);
  return {
    x: sizeArray[0],
    y: sizeArray[1],
  };
};

export const getRovers = (input: string[]) => {
  const rovers: {x:number, y:number, direction:string, command: string}[] = [];
  for (let i = 1; i < input.length; i += 2) {
    const [x, y, direction] = input[i].split(" ");
    rovers.push({
      x: Number(x),
      y: Number(y),
      direction: direction,
      command: input[i + 1],
    });
  }

  return rovers;
};


const getCommand = (input: string[], rovers: Rover[]) => {
  for (let i = 2, j = 0; i < input.length; i += 2, j++) {
    const command = input[i];
    if (rovers[j]) {
      rovers[j].command = command.split("");
    }
  }
};

export const getMovementList = (input: string[]) => {
  const plateau = getPlateauSize(input);
  const rovers = getRovers(input)[0];
  const movements = moveRover(plateau, rovers.x, rovers.y, rovers.direction, rovers.command!);
  return {plateau, movements};
}

export const moveRover = (plateau: { x: number; y: number },x: number, y: number, direction: string, instructions: string) => {
  const result: { x: number; y: number; direction: string }[] = [];

  for (const instruction of instructions) {
    switch (instruction) {
      case "R":
         result.push({x, y, direction: rotateR(direction)});
        break;
      case "L":
        result.push({x, y, direction: rotateL(direction)});
        break;
      default:
        const values = moveForward(plateau, direction, x, y)!;
        result.push({x: values.x, y: values.y, direction });
        break;
      }
  }
  return result;
};

const rotateR = (rover: string) => {
  const directionIndex = directions.indexOf(rover);
  return directions[(directionIndex + 1) % directions.length];
};

const rotateL = (rover: string) => {
  const directionIndex = directions.indexOf(rover);
  return directions[(directionIndex + 3) % directions.length];
};

const moveForward = (plateauLimits: { x: number; y: number }, direction: string, x: number , y: number) => {
  switch (direction) {
    case "N":
      if (y < plateauLimits.y) {
        return {x, y: y + 1};
      }
      break;
    case "E":
      if (x < plateauLimits.x) {
        return {x: x + 1, y};
      }
      break;
    case "S":
      if (y > 0) {
        return {x, y: y - 1};
      }
      break;
    case "W":
      if (x > 0) {
        return {x: x - 1, y};
      }
      break;
    default:
      console.log("Invalid direction: ", direction);
      return {x, y};
  }
};

// const main = (input: string[]) => {
//   const plateau = getPlateauSize(input);
//   const rovers = getRovers(input);
//   const roversFinalPositions = moveRovers(plateau, rovers);

//   for (let i = 0; i < roversFinalPositions.length; i++) {
//     const { x, y, direction } = roversFinalPositions[i];
//     console.log(`Rover ${i + 1}: ${x} ${y} ${direction}`);
//   }
// };

// const input = ["5 5", "1 2 N", "LMLMLMLMM", "3 3 E", "MMRMMRMRRM"];

// main(input);
