const linearSearch = (arr: number[], target: number) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return { index: i, value: arr[i], found: true };
    }
  }
  return { index: -1, value: null, found: false };
};

// Complexity Analysis
// O(n) time complexity
// O(1) space complexity

export default linearSearch;
