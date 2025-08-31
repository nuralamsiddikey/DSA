function maxSum(arr, k) {
  let window_sum = 0;
  for (let i = 0; i < k; i++) {
    window_sum += arr[i];
  }

  let max_sum = window_sum;

  for (let i = k; i < arr.length; i++) {
    window_sum += arr[i] - arr[i - k];
  }
  max_sum = Math.max(window_sum,max_sum,)

  return max_sum;
}

const arr = [5, 2, -1, 0, 3, 9];
const k = 2;
console.log(maxSum(arr, k));
