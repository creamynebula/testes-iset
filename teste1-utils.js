const getInfoOnWords = (text, query, tag, wordsIndex) => {
  //Returns updated wordsIndex with the indexes where we can find each word
  //we are out to replace in the current tag

  let wordIndex = 0;
  const newWords = [...wordsIndex];
  let [ltext, lquery] = [text.toLowerCase(), query.toLowerCase()]; //case insensitive search
  let queryLength = query.length;
  /*
  Every time we find a word, the next search will search the substring
  that comes after the found word. The first search is for the substring
  containing the tags
  */
  let remainingText = ltext.substring(tag.start, tag.end + 1);
  let searchResult = remainingText.search(lquery);
  let numLostElements = tag.start; //how many characters we excluded from the original so far

  while (searchResult !== -1) {
    wordIndex = searchResult + numLostElements; //index where the word starts in the full text, not the substring
    newWords.push(wordIndex); //recording results

    remainingText = remainingText.substring(
      wordIndex + queryLength - numLostElements
    ); //updating search space
    numLostElements = wordIndex + queryLength;

    searchResult = remainingText.search(lquery);
  }

  return newWords;
};

module.exports = getInfoOnWords;
