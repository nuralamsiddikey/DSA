const findLargestValue = (arr,arr_size)=>{
    if(arr_size<1){
        console.log("Invalid")
        return
    }

   let first = Number.MIN_VALUE

    for(let i = 0; i< arr_size; i = i+1){
      if(arr[i]>first)
        first = arr[i]
    }

    return first
}

const arr = [44,1,2,3,4,5]
const arr_size = arr.length

const max = findLargestValue(arr,arr_size)
console.log(max)
