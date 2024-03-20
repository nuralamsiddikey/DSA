const arr = [5,12,89,2,44]
let minVal = arr[0]

for(let i=0; i<arr.length; i++){
   if(arr[i] < minVal)
   minVal = arr[i]
}

console.log(minVal)