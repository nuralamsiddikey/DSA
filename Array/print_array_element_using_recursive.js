function funcB(idx, arr) {
  if (idx < arr.length) {
    console.log(arr[idx]);
    funcB(idx + 1, arr);
  }
}

const arr = [10, 20, 30, 40, 50];
funcB(0, arr);
