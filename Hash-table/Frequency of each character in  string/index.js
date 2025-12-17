function checkFrequency(str) {
  const hashMap = new Map();
  for (const c of str) {
    if (hashMap.has(c)) {
      hashMap.set(c, hashMap.get(c) + 1);
    } else {
      hashMap.set(c, 1);
    }
  }
  return hashMap;
}

const str = "geeksforgeeks";
console.log(checkFrequency(str));
