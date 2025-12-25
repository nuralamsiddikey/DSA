var isHappy = function (num) {
  let seen = new Set();
  while (num !== 1) {
    if (seen.has(num)) return false;
    seen.add(num);

    let sum = 0;
    let digitArr = String(num).split("");
    for (let i = 0; i < digitArr.length; i++) {
      sum += Number(digitArr[i]) * Number(digitArr[i]);
    }

    num = sum;
  }

  return true
};

console.log(isHappy(4));
