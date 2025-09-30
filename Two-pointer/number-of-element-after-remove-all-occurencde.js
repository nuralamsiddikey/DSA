function removeElement(arr, ele) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== ele) count++;
  }
  return count;
}

const arr = [0, 1, 3, 0, 2, 2, 4, 2]
const ele = 2
console.log(removeElement(arr, ele));
