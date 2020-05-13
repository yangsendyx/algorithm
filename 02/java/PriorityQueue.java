public class PriorityQueue<E extends Comparable<E>> implements Queue<E> {
    private MaxHeap<E> maxHeap;

    public PriorityQueue() {
        maxHeap = new MaxHeap<>();
    }

    public E getFront() {
        return maxHeap.findMax();
    };

    public int getSize() {
        return maxHeap.size();
    };

    public boolean isEmpty() {
        return maxHeap.isEmpty();
    };

    public void enqueue(E e) {
        maxHeap.add(e);
    };

    public E dequeue() {
        return maxHeap.extractMax();
    };
}