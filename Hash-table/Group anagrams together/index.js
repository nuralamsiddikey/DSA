function groupAnagram(arr) {
  let map = new Map();

  for (let str of arr) {
    let sortedArr = str.split("").sort().join("");
    if (map.has(sortedArr)) {
      map.get(sortedArr).push(str);
    } else {
      map.set(sortedArr, [str]);
    }
  }
  return [...map.values()]
}

let arr = ["act", "god", "cat", "dog", "tac"];

console.log(groupAnagram(arr));
