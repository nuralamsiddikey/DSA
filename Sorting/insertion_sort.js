let arr = [7, 12, 9, 11, 3];

for (let i = 1; i < arr.length; i++) {
  let currentValue = arr[i];
  for (let j = i; j >= 0; j--) {
    if (currentValue < arr[j]) {
      let temp = arr[j];
      arr[j] == currentValue;
      currentValue = temp;
      console.log(currentValue)
    }
  }
}


