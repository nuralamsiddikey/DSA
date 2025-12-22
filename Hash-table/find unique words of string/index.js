// print all unique words of string
function findUniqueWords(str) {
  const strArr = str.split(" ");
  const uniqueWords = new Set();
  for (let word of strArr) {
    uniqueWords.add(word);
  }

  return uniqueWords;
}

let str = "amar sonar bangla amar sonar desh";
console.log(findUniqueWords(str));
