// 队列接口
public interface Queue<E> {

	public E getFront();

	public int getSize();

	public boolean isEmpty();

	public void enqueue(E e);

	public E dequeue();
}