
public class BinarySearchTree <T extends Comparable<T>>{
  private int nodeCount = 0;

  private Node root = null;

  private class Node {
    Node left, right;
    T data;

    public Node(Node left, Node right, T data) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }

  public int size() {
    return nodeCount;
  }

  public boolean isEmpty() {
    return size() == 0;
  }

  public void clear() {
    root = null;
    nodeCount = 0;
  }

  public boolean add(T elem) {
    if (contains(elem)) return false;

    root = add(root, elem);
    nodeCount++;
    return true;
  }

  private Node add(Node node, T elem) {
    if (node == null) return new Node(null, null, elem);

    if (elem.compareTo(node.data) < 0)
      node.left = add(node.left, elem);
    else
      node.right = add(node.right, elem);

    return node;
  }

  public boolean contains(T elem) {
    return contains(root, elem);
  }

  private boolean contains(Node node, T elem) {
    if (node == null) return false;

    int cmp = elem.compareTo(node.data);

    if (cmp < 0) return contains(node.left, elem);
    if (cmp > 0) return contains(node.right, elem);

    return true;
  }

  public boolean remove(T elem) {
    if (contains(elem)) {
      root = remove(root, elem);
      nodeCount--;
      return true;
    }

    return false;
  }

  private Node remove(Node node, T elem) {
    if (node == null) return null;

    int cmp = elem.compareTo(node.data);

    if (cmp < 0) {
      node.left = remove(node.left, elem);
    } else if (cmp > 0) {
      node.right = remove(node.right, elem);
    } else {
      if (node.left == null) return node.right;
      if (node.right == null) return node.left;

      Node tmp = node;
      node = min(tmp.right);
      node.right = removeMin(tmp.right);
      node.left = tmp.left;
    }

    return node;
  }

  private Node min(Node node) {
    if (node.left == null) return node;
    return min(node.left);
  }

  private Node removeMin(Node node) {
    if (node.left == null) return node.right;
    node.left = removeMin(node.left);
    return node;
  }

  public void printInOrder() {
    printInOrder(root);
    System.out.println();
  }

  private void printInOrder(Node node) {
    if (node == null) return;

    printInOrder(node.left);
    System.out.print(node.data + " ");
    printInOrder(node.right);
  }

  public void printPreOrder() {
    printPreOrder(root);
    System.out.println();
  }

  private void printPreOrder(Node node) {
    if (node == null) return;

    System.out.print(node.data + " ");
    printPreOrder(node.left);
    printPreOrder(node.right);
  }

  public void printPostOrder() {
    printPostOrder(root);
    System.out.println();
  }

  private void printPostOrder(Node node) {
    if (node == null) return;

    printPostOrder(node.left);
    printPostOrder(node.right);
    System.out.print(node.data + " ");
  }
}
