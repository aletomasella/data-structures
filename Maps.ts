// TERMS
// LOAD FACTOR THE NUMBER OF ITEMS IN THE HASH TABLE DIVIDED BY THE SIZE OF THE HASH TABLE
// LOAD FACTOR = NUMBER OF ITEMS / SIZE OF HASH TABLE
// KEY  - THE VALUE THAT IS USED TO FIND THE VALUE IN THE HASH TABLE (CONSISTENT HASH)
// VALUE - THE VALUE THAT IS STORED IN THE HASH TABLE
// HASH FUNCTION - A FUNCTION THAT TAKES A KEY AND RETURNS A NUMBER
// HASH CODE - THE NUMBER THAT IS RETURNED FROM THE HASH FUNCTION
// HASH TABLE - A DATA STRUCTURE THAT STORES VALUES BASED ON A KEY

// LEAST RECENTLY USED CACHE (LRU CACHE)
// A CACHE IS A DATA STRUCTURE THAT STORES VALUES FOR FUTURE USE
// THE LRU CACHE IS A CACHE THAT REMOVES THE LEAST RECENTLY USED ITEM WHEN THE CACHE IS FULL
// THE LRU CACHE IS A GOOD CHOICE WHEN YOU HAVE A LIMITED AMOUNT OF MEMORY

type NodeMap<T> = {
  value: T;
  next?: NodeMap<T>;
  prev?: NodeMap<T>;
};

const createNode = <T>(value: T): NodeMap<T> => ({ value });

// LINKED LIST + HASH TABLE

class LRUCache<K, V> {
  private lenght: number;
  private head?: NodeMap<V>;
  private tail?: NodeMap<V>;
  private capacity: number;
  private cache: Map<K, NodeMap<V>>;
  private reverseCache: Map<NodeMap<V>, K>;

  constructor(capacity: number) {
    this.lenght = 0;
    this.head = this.tail = undefined;
    this.reverseCache = new Map<NodeMap<V>, K>();
    this.cache = new Map<K, NodeMap<V>>();
    this.capacity = capacity || 10;
  }

  get(key: K): V | undefined {
    const node = this.cache.get(key);
    if (!node) return;

    this.detach(node);
    this.preappend(node);

    return node.value;
  }

  update(key: K, value: V): void {
    const oldNode = this.cache.get(key);
    if (!oldNode) {
      const node = createNode(value);
      this.lenght++;
      this.preappend(node);
      this.trimCache();
      this.cache.set(key, node);
      this.reverseCache.set(node, key);
    } else {
      this.detach(oldNode);
      this.preappend(oldNode);
      oldNode.value = value;
    }
  }

  private detach(node: NodeMap<V>): void {
    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    if (this.head === node) {
      this.head = node.next;
    }

    if (this.tail === node) {
      this.tail = node.prev;
    }

    node.prev = node.next = undefined;
  }

  private preappend(node: NodeMap<V>): void {
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  }

  private trimCache(): void {
    if (this.lenght <= this.capacity) return;

    const tail = this.tail;
    if (tail) {
      this.detach(tail);
      this.reverseCache.delete(tail);
      this.cache.delete(this.reverseCache.get(tail)!);
      this.reverseCache.delete(tail);
      this.lenght--;
    }
  }
}
