function maxSum(arr, size) {
  let len = arr.length - (size - 1);
  let maxSum = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < i + size; j++) {
      let subArrSum = 0;
      for (let k = i; k <= j; k++) {
        subArrSum = subArrSum + arr[k];
      }
      if (subArrSum > maxSum) maxSum = subArrSum;
    }
  }
  console.log(maxSum);
}

const arr = [1, 2, 3, 4, 5, 6];
let size = 3
maxSum(arr, size);