function findSubArrWithFixedSize(arr,size) {
  let len = arr.length-(size-1)
  for (let i = 0; i < len; i++) {
    let finalSubArr = [];
    for (let j = i; j < i + size; j++) {
      let subArr = [];
      for (let k = i; k <= j; k++) {
        subArr.push(arr[k]);
        if (k == j) {
          finalSubArr = subArr;
        }
      }
    }
    console.log(finalSubArr);
  }
}

const arr = [1, 2, 3, 4,5,6];
let size = 2
findSubArrWithFixedSize(arr,size);