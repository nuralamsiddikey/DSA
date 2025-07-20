// check an array is sorted or not recursive approach

function isSorted(arr, n) {
  if (n === 1 || n === 0) {
    return true;
  }

  if (arr[n - 1] < arr[n - 2]) {
    return false;
  }
  return isSorted(arr, n - 1);
}

let arr = [90, 20, 30, 40, 50];
let n = arr.length;
console.log(isSorted(arr, n));
