function twoSum(arr, target) {
    let length = arr.length;
  
    for (let i = 0; i < length - 1; i++) {
      for (let j = i + 1; j < length; j++) {
        if (arr[i] + arr[j] === target) return true;
      }
      return false
    }
  }
  
  let arr = [0, -1, 2, -3, 1];
  let target = -1;
  
  const result = twoSum(arr, target);
  console.log(result);
  