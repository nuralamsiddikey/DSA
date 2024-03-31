let array = [64, 34, 25, 5, 22, 0,11, 90, 12,-3];

for (let i = 0; i < array.length - 1; i++) {
  let minIndex = i;

  for (let j = i + 1; j < array.length; j++) {
    if (array[j] < array[minIndex]) {
      minIndex = j;
    }
  }

  if (minIndex !== i) {
    let temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
}

console.log(array);
