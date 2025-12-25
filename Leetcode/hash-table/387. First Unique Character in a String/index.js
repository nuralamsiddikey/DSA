// first unique character in a string

var firstUniqChar = function (s) {
  let idx;
  for (let i = 0; i < s.length; i++) {
    let found = false;
    for (let j = 0; j < s.length; j++) {
      if (i === j) {
        continue;
      }
      if (s[i] === s[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      return i
    }
  }
  return -1;
};

let s = "leetcode";
console.log(firstUniqChar(s));
