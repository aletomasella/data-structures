// QUICKSORT ALGORITHM

const qs = (arr: number[], low: number, high: number) => {
  if (low >= high) return;

  // partition the array

  const pivotIndex = partition(arr, low, high);
  // sort the left side of the array
  qs(arr, low, pivotIndex - 1);
  // sort the right side of the array
  qs(arr, pivotIndex + 1, high);
};

const partition = (arr: number[], low: number, high: number) => {
  // choose the middle element as the pivot
  const pivot = arr[Math.floor((low + high) / 2)];
  // initialize the index of the smaller element
  let index = low - 1;
  // loop through the array
  for (let i = low; i < high; i++) {
    // if the current element is smaller than the pivot
    if (arr[i] < pivot) {
      // increment the index of the smaller element
      index++;
      // swap the current element with the element at the index
      const temp = arr[index];
      arr[index] = arr[i];
      arr[i] = temp;
    }
  }
  // swap the element at the index with the pivot
  index++;
  console.log(index);
  arr[high] = arr[index];
  arr[index] = pivot;
  return index;
};

function quickSort(arr: number[]): number[] {
  qs(arr, 0, arr.length - 1);
  return arr;
}

const array = [
  2, 54, 56, 745, 6, 23, 4, 234, 6, 78, 34, 23, 1234, 4, 5, 123, 45, 5, 6, 77,
  234, 4, 656, 2,
];
const array2 = [
  10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 3, 4, 5, 67, 4, 43, 23, 4, 6, 7, 8, 345, 1,
  4234, 5234, 556, 5,
];

// Complexity Analysis
// Time complexity: O(n log n) to O(n^2)
// Space complexity: O(log n)

console.log(quickSort(array));
console.log(quickSort(array2));
