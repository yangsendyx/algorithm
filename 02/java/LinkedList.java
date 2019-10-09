// 虚拟头链表
public class LinkedList<E> {

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

	private Node dummyHead;
	int size;

	public LinkedList() {
		dummyHead = new Node(null, null);
		size = 0;
	}

	public int getSize() { return size; }
	public boolean isEmpty() { return size == 0; }

	public void addFirst(E e) { add(0, e); }
	public void addLast(E e) { add(size, e); }
	public void add(int index, E e) {
		if( index < 0 || index > size ) {
			throw new IllegalArgumentException("Add failed. Index is illegal.");
		}

		Node prev = dummyHead;
		for( int i = 0; i < index; i++ ) {
			prev = prev.next;
		}
		prev.next = new Node(e, prev.next);
		size ++;
	}

	public E removeFirst() { return remove(0); }
	public E removeLast() { return remove(size-1); }
	public void removeElement(E e) {
		int index = getIndex(e);
		if( index >= 0 ) remove(index);
	}
	public E remove(int index) {
		if( index < 0 || index > size ) {
			throw new IllegalArgumentException("Remove failed. Index is illegal.");
		}

		Node prev = dummyHead;
		for( int i = 0; i < index; i++ ) {
			prev = prev.next;
		}
		Node delNode = prev.next;
		prev.next = delNode.next;

		delNode.next = null;
		size --;

		return delNode.e;
	}

	public E getFirst() { return get(0); }
	public E getLast() { return get(size-1); }
	public E get(int index) {
		if( index < 0 || index > size ) {
			throw new IllegalArgumentException("Add failed. Index is illegal.");
		}

		Node cur = dummyHead.next;
		for( int i = 0; i < index; i++ ) cur = cur.next;

		return cur.e;
	}

	public void set(int index, E e) {
		if( index < 0 || index > size ) {
			throw new IllegalArgumentException("Add failed. Index is illegal.");
		}

		Node cur = dummyHead.next;
		for( int i = 0; i < index; i++ ) {
			cur = cur.next;
		}

		cur.e = e;
	}
	public boolean contains(E e) {
		int index = getIndex(e);
		return index >= 0;
	}
	public int getIndex(E e) {
		Node cur = dummyHead.next;
		int index = 0;
	
		while(cur != null) {
			if( e.equals(cur.e) ) return index;
			cur = cur.next;
			index ++;
		}
		
		return -1;
	}

	@Override
	public String toString() {
		StringBuilder res = new StringBuilder();

		for( Node cur = dummyHead.next; cur != null; cur = cur.next ) {
			res.append(cur + " => ");
		}
		res.append("NULL");

		return res.toString();
	}
}