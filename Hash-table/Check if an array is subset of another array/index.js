
// naive approach
function isSubset(a, b) {
  for (let i = 0; i < b.length; i++) {
    if (!a.includes(b[i])) {
      return false;
    }
  }
  return true;
}

// has table
function isSubset(a, b) {
  const hashSet = new Set(a);
  for (let i = 0; i < b.length; i++) {
    if (!hashSet.has(b[i])) {
      return false;
    }
  }
  return true;
}