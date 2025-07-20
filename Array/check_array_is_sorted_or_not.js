// check an array is sorted or not recursive approach
// time complexity: O(n)
// space complexity: O(n)

function isSorted(arr, n) {
  if (n === 1 || n === 0) {
    return true;
  }

  if (arr[n - 1] < arr[n - 2]) {
    return false;
  }
  return isSorted(arr, n - 1);
}

 
// iterative approach
// time complexity: O(n)
// space complexity: O(1)
function isSorted2(arr){
  for(let i=1;i<=arr.length;i++){
    if(arr[i]< arr[i-1]){
      return false
    }
  }

  return true
}


let arr = [10, 20, 30, 40, 50];
let n = arr.length;
console.log(isSorted(arr, n));
console.log(isSorted2(arr));