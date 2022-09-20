class MinHeap {
  public length: number;
  public data: number[];

  constructor() {
    this.length = 0;
    this.data = [];
  }

  public insert(value: number): void {
    //Complexity: O(log n) because its always a balanced tree
    this.data.push(value);
    this.heapifyUp(this.length);
    this.length++;
  }

  public remove(): number | undefined {
    //Complexity: O(log n)
    if (this.length === 0) return -1;

    const value = this.data[0];
    this.data[0] = this.data.pop() as number;
    this.length--;
    this.heapifyDown(0);
    return value;
  }

  public peek(): number | undefined {
    return this.data[0];
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public print(): void {
    console.log(this.data);
  }

  private getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  private getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }

  private getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  private swap(indexOne: number, indexTwo: number): void {
    const temp = this.data[indexOne];
    this.data[indexOne] = this.data[indexTwo];
    this.data[indexTwo] = temp;
  }

  private heapifyUp(index: number): void {
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);
    const parent = this.data[parentIndex];
    const child = this.data[index];

    if (parent > child) {
      this.swap(parentIndex, index);
      this.heapifyUp(parentIndex);
    }
  }

  private heapifyDown(index: number): void {
    if (index >= this.length) return;
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);

    if (leftChildIndex >= this.length || rightChildIndex >= this.length) return;

    const leftChild = this.data[leftChildIndex];
    const rightChild = this.data[rightChildIndex];
    const parent = this.data[index];

    if (leftChild > rightChild && rightChild < parent) {
      this.swap(index, rightChildIndex);
      this.heapifyDown(rightChildIndex);
    } else if (leftChild < rightChild && leftChild < parent) {
      this.swap(index, leftChildIndex);
      this.heapifyDown(leftChildIndex);
    }
  }
}
