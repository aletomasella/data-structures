// STACKS

// IS A ONE-ENDED LINEAR DATA STRUCTURE THAT ALLOWS YOU TO ADD AND REMOVE ELEMENTS FROM ONE END OF THE STRUCTURE (THE TOP OF THE STACK).

// THE LAST ELEMENT ADDED TO THE STACK IS THE FIRST ELEMENT REMOVED FROM THE STACK.

// TWO PRIMARY OPERATIONS OF A STACK:
// 1 PUSH: ADDS AN ELEMENT TO THE TOP OF THE STACK.
// 2 POP: REMOVES AN ELEMENT FROM THE TOP OF THE STACK.

// COMPLEXITY
// 1 PUSHING AN ELEMENT TO THE STACK IS CONSTANT TIME O(1)
// 2 POPPING AN ELEMENT FROM THE STACK IS CONSTANT TIME O(1)
// 3 PEEKING AT THE TOP ELEMENT OF THE STACK IS CONSTANT TIME O(1)
// 4 SEARCHING FOR AN ELEMENT IN THE STACK IS LINEAR TIME O(n)

// EXAMPLE WITH BRACKETS
// 1 IF THE BRACKET IS AN OPENING BRACKET, PUSH IT TO THE STACK.
// 2 IF THE BRACKET IS A CLOSING BRACKET, POP THE TOP ELEMENT OF THE STACK.
// 3 IF THE POPPED ELEMENT IS NOT THE CORRESPONDING OPENING BRACKET, THE BRACKETS ARE NOT BALANCED.
// 4 IF THE STACK IS EMPTY AND YOU ENCOUNTER A CLOSING BRACKET, THE BRACKETS ARE NOT BALANCED.
// 5 IF THE STACK IS NOT EMPTY AND YOU ENCOUNTER THE END OF THE EXPRESSION, THE BRACKETS ARE NOT BALANCED.

function bracketsAreOk(str) {
  str = str.split("");
  const stack = [];
  const openingBrackets = ["(", "[", "{"];
  const closingBrackets = [")", "]", "}"];
  const openingBracketsMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const closingBracketsMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let i = 0; i < str.length; i++) {
    if (openingBrackets.includes(str[i])) {
      stack.push(str[i]);
    } else if (closingBrackets.includes(str[i])) {
      if (stack.length === 0) {
        return false;
      }
      let lastElement = stack.pop();
      if (closingBracketsMap[str[i]] !== lastElement) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
}

console.log(bracketsAreOk("()")); // true
console.log(bracketsAreOk("()[]{}")); // true
console.log(bracketsAreOk("(]")); // false
