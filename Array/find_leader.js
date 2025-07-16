// Function to find the leaders in an array
// An element is a Leader if it is greater than or equal to all the elements to its right side.
function leaders(arr) {
  const result = [];
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let j;
    for (j = i + 1; j < n; j++) {
      if (arr[i] < arr[j]) break;
    }
    if (j === n) result.push(arr[i]);
  }

  return result;
}

const arr = [16, 17, 4, 3, 5, 2];
const result = leaders(arr);

console.log(result.join(" "));
