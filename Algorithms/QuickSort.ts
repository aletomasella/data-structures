// QUICKSORT ALGORITHM

const qs = (arr: number[], low: number, high: number) => {};

const partition = (arr: number[], low: number, high: number) => {
  const pivot = arr[Math.floor((low + high) / 2)];
  let index = low - 1;
  for (let i = low; i < high; i++) {
    if (arr[i] < pivot) {
      index++;
      const temp = arr[index];
      arr[index] = arr[i];
      arr[i] = temp;
    }
  }
  const temp = arr[index + 1];
};

function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const pivot = Math.floor(arr.length / 2);
  return [];
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
