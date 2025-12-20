// naive approach
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

let arr = [10, 12, 11, 15];
let low = 10;
let high = 15;
console.log(findMissing(arr, low, high));
