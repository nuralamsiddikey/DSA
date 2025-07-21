// generate all sub array of an array

function generateAllSubArrays(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let subArr = [];
      for (let k = i; k <= j; k++) {
        subArr.push(arr[k]);
      }
      console.log(subArr);
    }
  }
}

let arr = [1, 2, 3];

generateAllSubArrays(arr);
