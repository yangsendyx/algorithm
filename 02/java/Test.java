import java.util.Random;
import java.util.ArrayList;

public class Test {
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

	public static void BSTTest() {
		BST<Integer> bst = new BST<>();
		int[] nums = {5,3,6,8,4,2};
		for( int num: nums )
			bst.add(num);

		/*System.out.println("pre order");
		bst.preOrder();
		System.out.println();

		System.out.println("pre order not recursive");
		bst.preOrderNR();
		System.out.println();

		System.out.println("level order");
		bst.levelOrder();
		System.out.println();

		System.out.println("in order");
		bst.inOrder();
		System.out.println();

		System.out.println("post order");
		bst.postOrder();
		System.out.println();

		System.out.println("print bst");
		System.out.println(bst);*/

		
		Random random = new Random();
		int n = 1000;

		System.out.println("remove min");
		BST<Integer> bst2 = new BST<>();
		ArrayList<Integer> nums1 = new ArrayList<>();
		for( int i=0; i<n; i++ ) 
			bst2.add( random.nextInt(10000) );
		while( !bst2.isEmpty() ) 
			nums1.add( bst2.removeMin() );
		// System.out.println(nums1);
		for( int i=1; i<nums1.size(); i++ )
			if( nums1.get(i-1) > nums1.get(i) )
				throw new IllegalArgumentException("Error!");
		System.out.println("removeMin test completed.");


		System.out.println("remove max");
		BST<Integer> bst3 = new BST<>();
		ArrayList<Integer> nums2 = new ArrayList<>();
		for( int i=0; i<n; i++ ) 
			bst3.add( random.nextInt(10000) );
		while( !bst3.isEmpty() ) 
			nums2.add( bst3.removeMax() );
		// System.out.println(nums2);
		for( int i=1; i<nums2.size(); i++ ) 
			if( nums2.get(i-1) < nums2.get(i) ) 
				throw new IllegalArgumentException("Error!");
		System.out.println("removeMax test completed.");
	}

	public static void main(String[] args) {
		System.out.println("Start.");
		// LeetCodeTest();

		// ArrayTest();
		// StackTest();
		// QueueTest();
		// LinkedTest();
		BSTTest();
	}

	public static void LeetCodeTest() {
		LeetCode leetCode = new LeetCode();
		
		/*leetCode.test20("()[]{}");
		leetCode.test20("([)]");*/
		
		int[] nums1 = {1,2,6,3,4,5,6};
		leetCode.test203(nums1, 6);
		int[] nums2 = {1};
	    leetCode.test203(nums2, 1);
	    int[] nums3 = {};
	    leetCode.test203(nums3, 1);
	}
}