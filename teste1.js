const getInfoOnWords = require("./teste1-utils");

const translateText = (query, replacement, text) => {
  const textAsArray = [...text];
  replacement = replacement.toString(); //just in case we accidentally get a number instead

  //'tag' records the starting and ending points of each tag so we can search there for our query
  //'wordsIndex' is a record of where each query start in the text.
  const tag = { start: 0, end: 0 };
  let wordsIndex = [];

  textAsArray.map((character, i) => {
    if (character === "<") {
      tag.start = i;
    } else if (character === ">") {
      tag.end = i;
      wordsIndex = getInfoOnWords(text, query, tag, wordsIndex);
    }
  });

  let resultArray = [];
  let [textLength, queryLength] = [textAsArray.length, query.length];
  let whichWord = 0;

  for (let i = 0; i < textLength; i++) {
    if (i === wordsIndex[whichWord]) {
      //if we find a word
      resultArray.push(...replacement); //push the replacement
      whichWord++;
      i += queryLength - 1; //skip to the end of the word
    } else {
      resultArray.push(textAsArray[i]);
    }
  }

  return console.log(resultArray.join(""));
};

const fs = require("fs");
const fileName = process.argv[2];
const fileContent = fs.readFileSync(fileName, "utf8");
const data = fileContent.split("\r\n");
for (let i = 0; i < data.length; i += 3) {
  translateText(data[i], data[i + 1], data[i + 2]);
}
