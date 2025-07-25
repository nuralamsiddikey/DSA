// move all zeros to end of the array

function moveZeroToEnd(arr) {
  let n = arr.length;
  let resultArr = [];

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        if (arr[j] !== 0) {
          resultArr.push(arr[j]);
        }
      } else {
        if (arr[j] === 0) {
          resultArr.push(arr[j]);
        }
      }
    }
  }

  return resultArr;
}

let arr = [1,0,0,0, 2, 0, 4, 3, 0, 5, 0,0,0,0,0];

console.log(moveZeroToEnd(arr));
