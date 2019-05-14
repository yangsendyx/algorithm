
public class Test {
	// leetcode 有效的括号 20题
	public boolean isValid(String s) {
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
	}

	public static void main(String[] args) {
		// System.out.println( (new Test()).isValid("()[]{}") );
		// System.out.println( (new Test()).isValid("([)]") );


		// ArrayTest();
		// StackTest();
		QueueTest();
	}

	public static void QueueTest() {
		/*ArrayQueue<Integer> queue = new ArrayQueue<>();

		for( int i=0; i<10; i++ ) {
			queue.enqueue(i);
			System.out.println(queue);

			if( i%3 == 2 ) {
				queue.dequeue();
				System.out.println(queue);
			}
		}*/

		LoopQueue<Integer> queue = new LoopQueue<>();

		for( int i=0; i<10; i++ ) {
			queue.enqueue(i);
			System.out.println(queue);

			if( i%3 == 2 ) {
				queue.dequeue();
				System.out.println(queue);
			}
		}
	}

	public static void StackTest() {
		ArrayStack<Integer> stack = new ArrayStack<>();

		for( int i=0; i<5; i++ ) {
			stack.push(i);
			System.out.println(stack);
		}

		stack.pop();
		System.out.println(stack);
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
}