const binarySearch = (arr: number[], target: number) => {
  let low = 0;
  let high = arr.length;

  do {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === target)
      return { index: mid, value: arr[mid], found: true };
    else if (arr[mid] < target) low = mid + 1;
    else high = mid;
  } while (low < high);
  return { index: -1, value: null, found: false };
};

// Complexity Analysis
// Time complexity: O(log n)
// Space complexity: O(1)

export default binarySearch;
