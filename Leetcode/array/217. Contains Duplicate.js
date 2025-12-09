var containsDuplicate = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    } else {
      map.set(nums[i]);
    }
  }
  return false;
};

let nums = [1,1,1,3,3,4,3,2,4,2]
console.log(containsDuplicate(nums));
