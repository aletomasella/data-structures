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
