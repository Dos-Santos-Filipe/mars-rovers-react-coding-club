const directions = ["N", "E", "S", "W"];

type Rover = {
  x: number;
  y: number;
  direction: string;
  command?: string[];
};

const plateauSize = (input: string[]) => {
  const sizeArray = input[0].split(" ").map(Number);
  return {
    x: sizeArray[0],
    y: sizeArray[1],
  };
};

const getRovers = (input: string[]) => {
  const rovers: Rover[] = [];
  for (let i = 1; i < input.length; i += 2) {
    const [x, y, direction] = input[i].split(" ");
    rovers.push({
      x: Number(x),
      y: Number(y),
      direction: direction,
    });
  }

  getCommand(input, rovers);

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

const moveRovers = (plateau: { x: number; y: number }, rovers: Rover[]) => {
  const plateauLimits = plateau;
  const finalPosition: Rover[] = [];

  rovers.forEach((rover) => {
    rover.command?.forEach((instruction) => {
      switch (instruction) {
        case "R":
          rotateR(rover);
          break;
        case "L":
          rotateL(rover);
          break;
        default:
          moveForward(plateauLimits, rover);
          break;
      }
    });
    finalPosition.push({ ...rover });
  });

  return finalPosition;
};

const rotateR = (rover: Rover) => {
  const directionIndex = directions.indexOf(rover.direction);
  rover.direction = directions[(directionIndex + 1) % directions.length];
};

const rotateL = (rover: Rover) => {
  const directionIndex = directions.indexOf(rover.direction);
  rover.direction = directions[(directionIndex + 3) % directions.length];
};

const moveForward = (plateauLimits: { x: number; y: number }, rover: Rover) => {
  switch (rover.direction) {
    case "N":
      if (rover.y < plateauLimits.y) {
        rover.y++;
      }
      break;
    case "E":
      if (rover.x < plateauLimits.x) {
        rover.x++;
      }
      break;
    case "S":
      if (rover.y > 0) {
        rover.y--;
      }
      break;
    case "W":
      if (rover.x > 0) {
        rover.x--;
      }
      break;
  }
};

const main = (input: string[]) => {
  const plateau = plateauSize(input);
  const rovers = getRovers(input);
  const roversFinalPositions = moveRovers(plateau, rovers);

  for (let i = 0; i < roversFinalPositions.length; i++) {
    const { x, y, direction } = roversFinalPositions[i];
    console.log(`Rover ${i + 1}: ${x} ${y} ${direction}`);
  }
};

const input = ["5 5", "1 2 N", "LMLMLMLMM", "3 3 E", "MMRMMRMRRM"];

main(input);
