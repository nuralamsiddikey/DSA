// count distinct element of an array
function findDistinct(arr) {
  const set = new Set()

  for(let num of arr){
    set.add(num)
  }
  return set.size
}

let arr = [10, 12, 11, 15,10,16];
console.log(findDistinct(arr));
