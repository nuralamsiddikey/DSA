// two traversal approach
// tc: n(n)
// sc: n(1)

function removeZeroEnd(arr, ele) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== ele) {
      arr[count] = arr[i];
      count++;
    }
  }

  while (count < arr.length) {
    arr[count] = ele;
    count++;
  }

  return arr;
}

const arr = [1, 2, 0, 4, 3, 0, 5, 0];
const ele = 0;
console.log(removeZeroEnd(arr, ele));
