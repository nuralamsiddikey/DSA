
// time complexity: O(n2*k)
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
  return maxSum
}



// time complexity: O(n*k)
function maxSum(arr, k, n) {
  let max_sum = 0;
  for (let i = 0; i < n - k + 1; i++) {
    let current_sum = 0;
    for (let j = 0; j < k; j++) {
      current_sum += arr[i + j];
    }

    if (current_sum > max_sum) {
      max_sum = current_sum;
      current_sum = 0;
    }
  }
  return max_sum;
}

const arr = [1,2,3,4,5];
const k = 3;
const n = arr.length;
console.log(maxSum(arr, k, n));
