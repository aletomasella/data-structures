type TreeNodeS<T> = {
  value: T;
  left?: TreeNodeS<T>;
  right?: TreeNodeS<T>;
};

class BinarySearchTree {
  //   root: TreeNodeS<number> | undefined;
  //   constructor() {
  //     this.root = undefined;
  //   }
  //   insert(value: number): void {
  //     const newNode = { value };
  //     if (!this.root) {
  //       this.root = newNode;
  //       return;
  //     }
  //     let current = this.root;
  //     while (current) {
  //       if (value < current.value) {
  //         if (!current.left) {
  //           current.left = newNode;
  //           return;
  //         }
  //         current = current.left;
  //       } else {
  //         if (!current.right) {
  //           current.right = newNode;
  //           return;
  //         }
  //         current = current.right;
  //       }
  //     }
  //   }
  //   contains(value: number): boolean {
  //     let current = this.root;
  //     while (current) {
  //       if (value === current.value) {
  //         return true;
  //       } else if (value < current.value) {
  //         current = current.left;
  //       } else {
  //         current = current.right;
  //       }
  //     }
  //     return false;
  //   }
  //   remove(value: number): void {
  //     const removeNode = (node: TreeNode<number> | undefined, value: number) => {
  //       if (!node) return null;
  //       if (value === node.value) {
  //         if (!node.left && !node.right) {
  //           return null;
  //         }
  //         if (!node.left) {
  //           return node.right;
  //         }
  //         if (!node.right) {
  //           return node.left;
  //         }
  //         let tempNode = node.right;
  //         while (tempNode.left) {
  //           tempNode = tempNode.left;
  //         }
  //         node.value = tempNode.value;
  //         node.right = removeNode(node.right, tempNode.value);
  //         return node;
  //       } else if (value < node.value) {
  //         node.left = removeNode(node.left, value);
  //         return node;
  //       } else {
  //         node.right = removeNode(node.right, value);
  //         return node;
  //       }
  //     };
  //     this.root = removeNode(this.root, value);
  //   }
  //   // It is a recursive algorithm
  //   // Time Complexity: O(n)
  //   // Space Complexity: O(n)
  //   preOrderSearch(): number[] {
  //     const walk = (
  //       current: TreeNode<number> | undefined,
  //       path: number[]
  //     ): number[] => {
  //       if (!current) return path;
  //       path.push(current.value);
  //       walk(current.left, path);
  //       walk(current.right, path);
  //       return path;
  //     };
  // }
}
