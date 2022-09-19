// Depth-First Search
// It uses a stack to keep track of the nodes
// It is a recursive algorithm
// Time Complexity: O(n)
// Space Complexity: O(n)

type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

const walk = (
  current: TreeNode<number> | undefined,
  path: number[],
  operation: "pre" | "in" | "post"
): number[] => {
  if (!current) return path;
  if (operation === "pre") path.push(current.value);
  walk(current.left, path, operation);
  if (operation === "in") path.push(current.value);
  walk(current.right, path, operation);
  if (operation === "post") path.push(current.value);
  return path;
};

const preOrderSearch = (root: TreeNode<number>): number[] => {
  return walk(root, [], "pre");
};

const inOrderSearch = (root: TreeNode<number>): number[] => {
  return walk(root, [], "in");
};

const postOrderSearch = (root: TreeNode<number>): number[] => {
  return walk(root, [], "post");
};

// Breadth-First Search
// It uses a queue to keep track of the nodes
// It is a non-recursive algorithm
// Time Complexity: O(n)
// Space Complexity: O(n)

const breadthFirstSearch = (
  root: TreeNode<number>,
  value: number
): [boolean, number[]] => {
  const queue: TreeNode<number>[] = [root];
  const path: number[] = [];
  let hasValue = false;
  while (queue.length) {
    const current = queue.shift();
    if (current) {
      path.push(current.value);
      if (current.value === value) {
        hasValue = true;
      }
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
  return [hasValue, path];
};

// Compare if two binary trees are equal

const isEqual = (
  a: TreeNode<number> | undefined,
  b: TreeNode<number> | undefined
): boolean => {
  if (a === undefined && b === undefined) return true;

  if (a === undefined || b === undefined) return false;

  if (a.value !== b.value) return false;

  return isEqual(a.left, b.left) && isEqual(a.right, b.right);
};
