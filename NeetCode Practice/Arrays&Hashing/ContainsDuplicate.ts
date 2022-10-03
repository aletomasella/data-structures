class ContainsDuplicate {
  constructor() {}

  bruteForce(nums: number[]): boolean {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          return true;
        }
      }
    }
    return false;
  }

  usingSet(nums: number[]): boolean {
    const set = new Set(nums);
    return set.size !== nums.length;

    // OR

    // let set = new Set();
    // for (let i = 0; i < nums.length; i++) {
    // if (set.has(nums[i])) {
    // return true;
    // }
    // set.add(nums[i]);
    // }
    // return false;
  }

  usingSort(nums: number[]): boolean {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) {
        return true;
      }
    }
    return false;
  }

  usingMap(nums: number[]): boolean {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
        return true;
      }
      map.set(nums[i], i);
    }
    return false;
  }
}
