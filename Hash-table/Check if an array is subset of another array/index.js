
// naive approach
function isSubset(a, b) {
  for (let i = 0; i < b.length; i++) {
    if (!a.includes(b[i])) {
      return false;
    }
  }
  return true;
}
