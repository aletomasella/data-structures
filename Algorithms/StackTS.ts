type NodeS<T> = {
  value: T;
  next?: NodeS<T>;
};

class Stack<T> {
  public length: number;
  private head?: NodeS<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  public peek(): T | undefined {
    return this.head?.value;
  }

  public push(value: T): void {
    const node: NodeS<T> = { value };
    this.length++;
    if (!this.head) {
      this.head = node;
      return;
    }
    node.next = this.head;
    this.head = node;
  }

  public pop(): T | undefined {
    if (!this.head) return undefined;

    this.length--;
    const value = this.head.value;
    const head = this.head;
    this.head = head.next;

    head.next = undefined;
    head.value = undefined as any;
    return value;
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }
}

export default Stack;
