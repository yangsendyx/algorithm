// 尾指针链表队列
public class LinkedQueue<E> implements Queue<E> {
	private class Node {
		public E e;
		public Node next;

		public Node(E e, Node next) {
			this.e = e;
			this.next = next;
		}

		public Node(E e) { this(e, null); }

		public Node() { this(null, null); }

		@Override
		public String toString() {
			return e.toString();
		}
	}

	private Node head, tail;
	private int size;

	public LinkedQueue() {
		head = null;
		tail = null;
		size = 0;
	}

	@Override
	public E getFront() {
		if( head == null ) {
			throw new IllegalArgumentException("Queue is empty.");
		}

		return head.e;
	}

	@Override
	public int getSize() { return size; }

	@Override
	public boolean isEmpty() { return size == 0; }

	@Override
	public void enqueue(E e) {
		if( tail == null ) {
			tail = new Node(e);
			head = tail;
		} else {
			tail.next = new Node(e);
			tail = tail.next;
		}

		size ++;
	}

	@Override
	public E dequeue() {
		if( isEmpty() ) {
			throw new IllegalArgumentException("Cannot dequeue from an empty queue.");
		}

		Node delNode = head;
		head = head.next;
		delNode.next = null;

		if( head == null ) {
			tail = null;
		}

		size --;
		return delNode.e;
	}

	@Override
	public String toString() {
		StringBuilder res = new StringBuilder();
		res.append("Queue: front ");
		for( Node cur = head.next; cur != null; cur = cur.next ) {
			res.append(cur + " => ");
		}
		res.append("NULL tail");

		return res.toString();
	}
}