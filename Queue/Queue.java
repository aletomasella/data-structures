package Queue;

public class Queue <T> implements Iterable <T> {
  private java.util.LinkedList <T> list = new java.util.LinkedList <T> ();

  public Queue() {}

  public Queue(T firstElem) {
    offer(firstElem);
  }

  public int size() {
    return list.size();
  }

  public boolean isEmpty() {
    return size() == 0;
  }

  public void offer(T elem) {
    list.addLast(elem);
  }

  public T poll() {
    if (isEmpty()) throw new java.util.NoSuchElementException();
    return list.removeFirst();
  }

  public T peek() {
    if (isEmpty()) throw new java.util.NoSuchElementException();
    return list.peekFirst();
  }

  @Override public java.util.Iterator <T> iterator() {
    return list.iterator();
  }

  public static void main(String[] args) {
    Queue <Integer> queue = new Queue <Integer> ();
    for (int i = 0; i < 10; i++) {
      queue.offer(i);
    }
    for (int i : queue) {
      System.out.println(i);
    }
    while (!queue.isEmpty()) {
      System.out.println(queue.poll());
    }
  }

  
}
