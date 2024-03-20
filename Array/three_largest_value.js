const findLargestValue = (arr,arr_size)=>{
    let first,second,third
    if(arr_size<1){
        console.log("Invalid")
        return
    }

    first =second = third = Number.MIN_VALUE

    for(let i = 0; i< arr_size; i++){
      if(arr[i]>first){
        third = second
        second = first
        first = arr[i]
      }else if(arr[i]>second){
        third = second
        second = arr[i]
      }else if(arr[i]>third){
        third = arr[i]
      }
    }
  
    return {first,second,third}
}

const arr = [44,1,2,3,4,45,5]
const arr_size = arr.length

const value = findLargestValue(arr,arr_size)
console.log(value)
