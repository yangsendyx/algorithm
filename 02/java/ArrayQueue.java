// 数组队列
public class ArrayQueue<E> implements Queue<E> {
	Array<E> array;

	public ArrayQueue(int capacity) {
		array = new Array<>(capacity);
	}

	public ArrayQueue() {
		array = new Array<>();
	}

	public int getCapacity() {
		return array.getCapacity();
	}

	@Override
	public int getSize() {
		return array.getSize();
	}

	@Override
	public boolean isEmpty() {
		return array.isEmpty();
	}

	@Override
	public void enqueue(E e) {
		array.addLast(e);
	}

	@Override
	public E dequeue() {
		return array.removeFirst();
	}

	@Override
	public E getFront() {
		return array.getFirst();
	}

	@Override
	public String toString() {
		StringBuilder res = new StringBuilder();
		int size = getSize();
		int length = getCapacity();

		res.append(String.format("Queue: size = %d, capacity = %d", size, length));
		res.append("front [");

		for( int i = 0; i < size; i++ ) {
			res.append(array.get(i));
			if( i != size - 1 ) res.append(", ");
		}

		res.append("] tail");
		return res.toString();
	}
}