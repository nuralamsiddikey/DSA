//some method executes a callback functions for each array item


// if each iteration is true then result will be true if false then result will be false
const numbers = [10,40,20,60,30]
const result =  numbers.some((item)=> item > 5)
console.log(result)