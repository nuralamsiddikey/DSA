// find sub string of string
function findSubString(str) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      res.push(str.substring(i, j + 1));
    }
  }

  return res;
}

let str = "abcd";

console.log(findSubString(str));
