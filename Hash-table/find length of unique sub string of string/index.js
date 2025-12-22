// find sub string of string
function findSubString(str) {
  let res = new Set()
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      res.add(str.substring(i, j + 1));
    }
  }

  return res;
}

let str = "aaa";

console.log(findSubString(str));
