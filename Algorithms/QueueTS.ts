type Node<T> = {
  value: T;
  next?: Node<T>;
};

class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  public peek(): T | undefined {
    return this.head?.value;
  }

  public enqueue(value: T): void {
    const node: Node<T> = { value };
    this.length++;
    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  public dequeue(): T | undefined {
    if (!this.head) return undefined;

    this.length--;
    const value = this.head.value;
    const head = this.head;
    this.head = head.next;

    head.next = undefined;
    head.value = undefined as any;
    return value;
  }
}

export default Queue;
