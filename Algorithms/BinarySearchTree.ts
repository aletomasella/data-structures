type TreeNodeS<T> = {
  value: T;
  left?: TreeNodeS<T>;
  right?: TreeNodeS<T>;
};

class BinarySearchTree {
  root: TreeNodeS<number> | undefined;

  constructor() {
    this.root = undefined;
  }

  find(value: number): boolean {
    // COMPLEXITY O(height) IT CAN BE O(log n) OR O(n) depending on the trees structure
    let current = this.root;
    while (current) {
      if (current.value === value) {
        return true;
      }
      if (current.value > value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  insert(value: number): void {
    const newNode = { value };
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (current) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  remove(value: number): void {
    const removeNode = (node: TreeNodeS<number> | undefined, value: number) => {
      if (!node) return;
      if (value === node.value) {
        if (!node.left && !node.right) {
          return;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }
        let tempNode = node.right;
        while (tempNode.left) {
          tempNode = tempNode.left;
        }
        node.value = tempNode.value;
        node.right = removeNode(node.right, tempNode.value);
        return node;
      } else if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else {
        node.right = removeNode(node.right, value);
        return node;
      }
    };
    this.root = removeNode(this.root, value);
  }
}
