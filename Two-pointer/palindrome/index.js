function isPalindrome(num) {
  num = String(num);
  let left = 0;
  let right = num.length - 1;

  while (left < right) {
    if (num[left] !== num[right]) return false;
    else {
      left++;
      right--;
    }
  }
  return true;
}

const number = 1234;
console.log(isPalindrome(number)); // true
