// reverse array
// time complexit: O(n), space complexity: O(n)
// naive approach

function reverseArray(arr){
   let reverseArr = []

   for(let i=arr.length-1;i>=0;i--){
        reverseArr.push(arr[i])
   }

   return reverseArr
}

const arr = [1, 4, 3, 2, 6, 5,0];
console.log(reverseArray(arr))



// reverse array
// time complexit: O(n), space complexity: O(1)
// using two pointer

function reverseArray2(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }

  return arr;
}

const arr2 = [1, 4, 3, 2, 6, 5, 0];
console.log(reverseArray2(arr2));
