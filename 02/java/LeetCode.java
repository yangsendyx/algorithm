import java.util.TreeSet;
import java.util.TreeMap;
import java.util.ArrayList;


public class LeetCode {
	public LeetCode() {}

	private boolean num20(String s) {
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
	public void test20(String s) {
		Boolean res = num20(s);
		System.out.println( res );
	}

	private class ListNode {
		int val;
		ListNode next;
		ListNode(int x) { val = x; }
		@Override
		public String toString() {
			StringBuilder s = new StringBuilder();
			ListNode cur = this;
			while( cur != null ) {
				s.append(cur.val + " => ");
				cur = cur.next;
			}
			s.append("NULL");
			return s.toString();
		}
	}
	private ListNode num203(ListNode head, int val) {
		/*while( head != null && head.val == val ) {
			ListNode delNode = head;
			head = head.next;
			delNode.next = null;
		}
		if( head == null ) return head;

		ListNode prev = head;
		while( prev.next != null ) {
			if( prev.next.val == val ) {
				ListNode delNode = prev.next;
				prev.next = delNode.next;
				delNode.next = null;
			} else {
				prev = prev.next;
			}
		}

		return head;*/

		/*ListNode dummyHead = new ListNode(-1);
		dummyHead.next = head;

		ListNode prev = dummyHead;
		while( prev.next != null ) {
			if( prev.next.val == val ) {
				ListNode delNode = prev.next;
				prev.next = delNode.next;
				delNode.next = null;
			} else {
				prev = prev.next;
			}
		}

		return dummyHead.next;*/

		if( head == null ) return null;
		head.next = num203(head.next, val);
		return head.val == val ? head.next : head;
	}
	public void test203(int[] nums, int val) {
		ListNode dummyHead = new ListNode(0);
		ListNode cur = dummyHead;

		for( int i=0; i<nums.length; i++ ) {
			cur.next = new ListNode(nums[i]);
			cur = cur.next;
		}

		ListNode head = dummyHead.next;
		System.out.println("入  " + head + "  删除" + val);
		head = num203(head, val);
		System.out.println("出  " + head);
	}

	public int num804(String[] words) {
		TreeSet<String> set = new TreeSet<>();
		String[] codes = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};

		for(String word : words) {
			StringBuilder res = new StringBuilder();
			for(int i=0; i<word.length(); i++) {
				res.append(codes[word.charAt(i) - 'a']);
			}
			set.add(res.toString());
		}

		return set.size();
	}

	public int[] num349(int[] nums1, int[] nums2) {
		TreeSet<Integer> set = new TreeSet<>();
		for( int num : nums1 ) set.add(num);

		ArrayList<Integer> list = new ArrayList<>();
		for( int num : nums2 ) {
			if( set.contains(num) ) {
				list.add(num);
				set.remove(num);
			}
		}

		int size = list.size();
		int[] res = new int[size];
		for( int i=0; i<size; i++ ) res[i] = list.get(i);

		return res;
	}
	
	public int[] num350(int[] nums1, int[] nums2) {
		TreeMap<Integer, Integer> map = new TreeMap<>();
		for( int num : nums1 ) {
			int val = map.containsKey(num) ? map.get(num)+1 : 1;
			map.put(num, val);
		}

		ArrayList<Integer> list = new ArrayList<>();
		for( int num : nums2 ) {
			if( map.containsKey(num) ) {
				list.add(num);
				map.put(num, map.get(num) - 1);
				if( map.get(num) == 0 ) map.remove(num);
			}
		}

		int size = list.size();
		int[] res = new int[size];
		for( int i=0; i<size; i++ ) res[i] = list.get(i);

		return res;
    }
}