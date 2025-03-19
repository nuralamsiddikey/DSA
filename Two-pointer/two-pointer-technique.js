function twoSum(arr, target) {
    let length = arr.length;
    let left = 0;
    let right = length - 1;
    while (left < right) {
      let sum = arr[left] + arr[right];
      if (sum === target) {
        return true;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    return false;
  }
  
  let arr = [0, -1, 2, -3, 1];
  let target = -1
  
  const result = twoSum(arr, target);
  console.log(result);
  