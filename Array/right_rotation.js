function rotateArr(arr, d) {
  let n = arr.length;

  for (let j = 0; j < d; j++) {
    let last = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
      arr[i + 1] = arr[i];
    }
    arr[0] = last;
  }

  return arr;
}

let arr = [1, 2, 3, 4, 5, 6];
let d = 2

console.log(rotateArr(arr, d));
