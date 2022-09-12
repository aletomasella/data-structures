// QUEUES

// IS A LINIEAR DATA STRUCTURE THAT STORES ITEMS IN A FIRST IN FIRST OUT (FIFO) ORDER.

// THE MOST RECENTLY ADDED ITEM IS AT THE REAR OF THE QUEUE AND THE ITEM THAT HAS BEEN IN THE QUEUE THE LONGEST IS AT THE FRONT.
// IT HAS TWO PRIMARY OPERATIONS:
// 1 ENQUEUE: ADDS AN ELEMENT TO THE REAR OF THE QUEUE.
// 2 DEQUEUE: REMOVES AN ELEMENT FROM THE FRONT OF THE QUEUE.

// COMPLEXITY
// 1 ENQUEUEING AN ELEMENT TO THE QUEUE IS CONSTANT TIME O(1)
// 2 DEQUEUEING AN ELEMENT FROM THE QUEUE IS CONSTANT TIME O(1)
// 3 PEEKING AT THE FRONT ELEMENT OF THE QUEUE IS CONSTANT TIME O(1)
// 4 SEARCHING FOR AN ELEMENT IN THE QUEUE IS LINEAR TIME O(n)

// BFS EXAMPLE
// 1 ADD THE ROOT NODE TO THE QUEUE.
// 2 WHILE THE QUEUE IS NOT EMPTY:
// 3 REMOVE THE FIRST ELEMENT FROM THE QUEUE AND ADD IT TO THE VISITED ARRAY.
// 4 ADD THE CHILDREN OF THE REMOVED ELEMENT TO THE QUEUE.
// 5 REPEAT UNTIL THE QUEUE IS EMPTY.

// BFS IMPLEMENTATION
function bfs(root) {
  const queue = [];
  const visited = [];
  queue.push(root);
  while (queue.length !== 0) {
    let firstElement = queue.shift();
    visited.push(firstElement);
    firstElement.children.forEach((child) => {
      queue.push(child);
    });
  }
  return visited;
}

// BFS IMPLEMENTATION WITH A QUEUE CLASS
class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(value) {
    this.queue.push(value);
  }
  dequeue() {
    return this.queue.shift();
  }
  peek() {
    return this.queue[0];
  }
  isEmpty() {
    return this.queue.length === 0;
  }
}

function bfsWithClass(root) {
  const queue = new Queue();
  const visited = [];
  queue.enqueue(root);
  while (!queue.isEmpty()) {
    let firstElement = queue.dequeue();
    visited.push(firstElement);
    firstElement.children.forEach((child) => {
      queue.enqueue(child);
    });
  }
  return visited;
}
