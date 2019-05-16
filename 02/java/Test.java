import java.util.Random;

public class Test {
	// leetcode 有效的括号 20题
	/*public boolean isValid(String s) {
	    ArrayStack<Character> stack = new ArrayStack<>();

	    int len = s.length();
	    for( int i = 0; i < len; i++ ) {
	    	char c = s.charAt(i);
	    	if( c == '{' || c == '[' || c =='(' ) {
	    		stack.push( c );
	    	} else {
	    		if( stack.isEmpty() ) return false;
	    		char top = stack.pop();
	    		if( c == '}' && top != '{' ) return false;
	    		if( c == ']' && top != '[' ) return false;
	    		if( c == ')' && top != '(' ) return false;
	    	}
	    }

	    return stack.isEmpty();
	}*/

	private static double testQueueTime(Queue<Integer> q, int opCount) {
		long startTime = System.nanoTime();

		Random random = new Random();
		for( int i = 0; i < opCount; i++ ) q.enqueue( random.nextInt(Integer.MAX_VALUE) );
		for( int i = 0; i < opCount; i++ ) q.dequeue();

		long endTime = System.nanoTime();
		return ( endTime - startTime ) / 1000000000.0;
	}
	public static void QueueTest() {
		/*ArrayQueue<Integer> queue1 = new ArrayQueue<>();
		for( int i=0; i<10; i++ ) {
			queue1.enqueue(i);
			System.out.println(queue1);

			if( i%3 == 2 ) {
				queue1.dequeue();
				System.out.println(queue1);
			}
		}

		LoopQueue<Integer> queue2 = new LoopQueue<>();
		for( int i=0; i<10; i++ ) {
			queue2.enqueue(i);
			System.out.println(queue2);

			if( i%3 == 2 ) {
				queue2.dequeue();
				System.out.println(queue2);
			}
		}

		LinkedQueue<Integer> queue3 = new LinkedQueue<>();
		for( int i=0; i<10; i++ ) {
			queue3.enqueue(i);
			System.out.println(queue3);

			if( i%3 == 2 ) {
				queue3.dequeue();
				System.out.println(queue3);
			}
		}*/

		int opCount = 100000;

		ArrayQueue<Integer> arrayQueue = new ArrayQueue<>();
		double time1 = testQueueTime(arrayQueue, opCount);
		System.out.println("ArrayQueue, time: " + time1 + " s");

		LoopQueue<Integer> loopQueue = new LoopQueue<>();
		double time2 = testQueueTime(loopQueue, opCount);
		System.out.println("LoopQueue, time: " + time2 + " s");

		LinkedQueue<Integer> linkedQueue = new LinkedQueue<>();
		double time3 = testQueueTime(linkedQueue, opCount);
		System.out.println("LinkedQueue, time: " + time3 + " s");
	}

	private static double testStackTime(Stack<Integer> s, int opCount) {
		long startTime = System.nanoTime();

		Random random = new Random();
		for( int i = 0; i < opCount; i++ ) s.push( random.nextInt(Integer.MAX_VALUE) );
		for( int i = 0; i < opCount; i++ ) s.pop();

		long endTime = System.nanoTime();
		return ( endTime - startTime ) / 1000000000.0;
	}
	public static void StackTest() {
		/*ArrayStack<Integer> stack = new ArrayStack<>();
		for( int i=0; i<5; i++ ) {
			stack.push(i);
			System.out.println(stack);
		}
		stack.pop();
		System.out.println(stack);

		LinkedStack<Integer> likend = new LinkedStack<>();
		for( int i=0; i<5; i++ ) {
			likend.push(i);
			System.out.println(likend);
		}
		likend.pop();
		System.out.println(likend);*/

		int opCount = 10000000;

		ArrayStack<Integer> arrayStack = new ArrayStack<>();
		double time1 = testStackTime(arrayStack, opCount);
		System.out.println("ArrayStack, time: " + time1 + " s");

		LinkedStack<Integer> linkedStack = new LinkedStack<>();
		double time2 = testStackTime(linkedStack, opCount);
		System.out.println("LinkedStack, time: " + time2 + " s");
	}

	public static void ArrayTest() {
		Array<Integer> arr = new Array<>();
		for( int i=0; i<10; i++ ) {
			arr.addLast(i);
		}
		System.out.println(arr);

		arr.add(1, 100);
		System.out.println(arr);

		arr.addFirst(-1);
		System.out.println(arr);

		arr.remove(2);
		System.out.println(arr);

		arr.removeElement(4);
		System.out.println(arr);

		arr.removeFirst();
		System.out.println(arr);
	}

	public static void LinkedTest() {
		LinkedList<Integer> linkedList = new LinkedList<>();
		for( int i=0; i<5; i++ ) {
			linkedList.addFirst(i);
			System.out.println( linkedList );
		}

		linkedList.add(2, 666);
		System.out.println( linkedList );

		linkedList.remove(2);
		System.out.println( linkedList );

		linkedList.removeFirst();
		System.out.println( linkedList );

		linkedList.removeLast();
		System.out.println( linkedList );
	}

	public static void main(String[] args) {
		System.out.println("Start.");
		LeetCode leetCode = new LeetCode();
		System.out.println( leetCode.no20("()[]{}") );
		System.out.println( leetCode.no20("([)]") );


		// ArrayTest();
		// StackTest();
		// QueueTest();
		// LinkedTest();
	}
}