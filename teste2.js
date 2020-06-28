const solvePuzzle = (guess1, guess2, puzzle) => {
  const [i1, i2] = [puzzle.indexOf("_"), puzzle.lastIndexOf("_")];
  const letters1 = [guess1[i1], guess1[i2]];
  const letters2 = [guess2[i1], guess2[i2]];
  const cond1 = letters1[0] == letters2[1];
  const cond2 = letters1[1] == letters2[0];
  const cond3 = letters1[0] == letters2[0];
  const cond4 = letters1[1] == letters2[1];

  if (
    ((cond1 || cond2) && !(cond1 && cond2)) ||
    ((cond3 || cond4) && !(cond3 && cond4))
  )
    return console.log("Y");
  else return console.log("N");
};

const fs = require("fs");
const fileName = process.argv[2];
const fileContent = fs.readFileSync(fileName, "utf8");
const data = fileContent.split("\r\n");
for (let i = 0; i < data.length - 1; i += 3) {
  solvePuzzle(data[i + 1], data[i + 2], data[i + 3]);
}
