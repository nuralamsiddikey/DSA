// some method executes a callback function for each array element
// return first matched value

const numbers = [10,20,30,40,50]
const result = numbers.find((number)=> number > 13)
console.log(result)