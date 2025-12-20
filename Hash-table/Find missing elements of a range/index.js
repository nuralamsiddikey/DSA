// naive approach
function findMissing(arr, low, high) {
  let missinArr = [];

  let start = low;
  while (start <= high) {
    if (!arr.includes(start)) missinArr.push(start);
    start++;
  }
  return missinArr;
}

// hashing
function findMissing(arr, low, high) {
  let missinArr = [];
  let set = new Set(arr);
  let start = low;
  while (start <= high) {
    if (!set.has(start)) missinArr.push(start);
    start++;
  }
  return missinArr;
}

let arr = [1, 14, 11, 51, 15];
let low = 50;
let high = 55;
console.log(findMissing(arr, low, high));
