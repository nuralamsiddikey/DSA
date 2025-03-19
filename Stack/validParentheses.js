// valid parenthesis problem solving using stack

const isValidParentheses = (str) => {
    const stack = [];
    const pairs = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
    for (let char of str) {
      if (char === "(" || char === "{" || char === "[") {
        stack.push(char);
      } else if (char === ")" || char === "}" || char === "]") {
        if (char !== pairs[stack.pop()]) {
          return false;
        }
      }
    }
    return stack.length === 0;
  };
  
  const inputString = "({()})";
  console.log(isValidParentheses(inputString));
  