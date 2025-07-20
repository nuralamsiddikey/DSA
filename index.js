function isSorted2(arr){
  for(let i=1;i<=arr.length;i++){
    if(arr[i]< arr[i-1]){
      return false
    }
  }

  return true
}

let arr = [10, 20, 30, 40, 50];

console.log(isSorted2(arr));
