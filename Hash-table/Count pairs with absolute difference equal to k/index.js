function countPair(arr, k) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === k) counter++;
    }
  }

  return counter;
}

let arr = [8, 16, 12, 16, 4, 0];
let k = 4;
console.log(countPair(arr, k));
