type NodeL<T> = {
  value: T;
  next?: NodeL<T>;
  prev?: NodeL<T>;
};

class DoubleLinkList<T> {
  public length: number;
  private head?: NodeL<T>;
  private tail?: NodeL<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  preappend(value: T): void {
    const newNode = { value } as NodeL<T>;
    if (!this.head) {
      this.head = this.tail = newNode;
      this.length++;
      return;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  insertAt(value: T, index: number): void {
    if (index > this.length) {
      throw new Error("Index out of bounds");
    }

    if (index === this.length) {
      this.append(value);
      return;
    }

    if (index === 0) {
      this.preappend(value);
      return;
    }

    this.length++;
    const newNode = { value } as NodeL<T>;

    const current = this.getAt(index);

    newNode.next = current;
    newNode.prev = current?.prev;
    if (current?.prev) {
      current.prev.next = newNode;
    }
  }

  append(value: T): void {
    const newNode = { value } as NodeL<T>;
    if (!this.head) {
      this.head = this.tail = newNode;
      this.length++;
      return;
    }
    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  remove(value: T): T | undefined {
    let current = this.head;
    for (let i = 0; current && i < this.length; i++) {
      if (current.value === value) {
        break;
      }
      current = current.next;
    }

    if (!current) {
      return undefined;
    }

    this.length--;

    if (this.length === 0) {
      this.head = this.tail = undefined;
      return current.value;
    }

    if (current.prev) {
      current.prev.next = current.next;
    }

    if (current.next) {
      current.next.prev = current.prev;
    }

    if (current === this.head) {
      this.head = current.next;
    }

    if (current === this.tail) {
      this.tail = current.prev;
    }

    current.next = current.prev = undefined;

    return current.value;
  }

  get(index: number): T | undefined {
    const node = this.getAt(index);
    return node?.value;
  }

  removeAt(index: number): T | undefined {
    const node = this.getAt(index);
    if (!node) {
      return undefined;
    }
    return this.remove(node.value);
  }

  private getAt(index: number): NodeL<T> | undefined {
    let current = this.head;
    for (let i = 0; current && i < index; i++) {
      current = current.next;
    }
    return current;
  }

  toArray(): T[] {
    const arr: T[] = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  toString(): string {
    return this.toArray().toString();
  }

  reverse(): void {
    let current = this.head;
    let prev: NodeL<T> | undefined = undefined;
    let next: NodeL<T> | undefined = undefined;
    while (current) {
      next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current = next;
    }
    this.tail = this.head;
    this.head = prev;
  }
}
