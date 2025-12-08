
// naive approach
function threeSum(arr) {
  let resultArr = [];
  const length = arr.length;
  for (let i = 0; i < length - 2; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          resultArr.push([i, j, k]);
        }
      }
    }
  }
  return resultArr;
}

let arr = [0, -1, 2, -3, 1];
console.log(threeSum(arr));
