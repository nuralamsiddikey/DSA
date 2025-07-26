//Duplicate within K Distance in an Array
// time complexity: O(n*k)
// space complexity: O(1)
// naive approach

function checkDuplicateWithinK(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= i + k && j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return "Yes";
      }
    }
  }

  return "No";
}

const arr = [1, 2, 3, 4, 5];

const k = 3;

console.log(checkDuplicateWithinK(arr, k));
