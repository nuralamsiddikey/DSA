function removeDuplicates(arr) {
  const set = new Set();
  let idx = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!set.has(arr[i])) {
      set.add(arr[i]);
      arr[idx++] = arr[i];
    }
  }

  return arr.slice(0, idx);
}

const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];

console.log(removeDuplicates(arr));
