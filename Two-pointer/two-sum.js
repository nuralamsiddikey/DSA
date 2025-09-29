function twoSum(arr, k) {
  let left = 0;
  let right = arr.length - 1;

  while (left !== right) {
    let sum = arr[left] + arr[right];
    if (sum === k) return true;
    else if (sum < k) left++;
    else right--;
  }

  return false;
}

const arr =[-8, 1, 4, 6, 10, 45]
const target = 16
console.log(twoSum(arr, target));
