import java.util.Stack;
import java.util.Queue;
import java.util.LinkedList;
// Binary Search Tree
public class BST<E extends Comparable<E>> {
	private class Node {
		public E e;
		public Node left, right;

		public Node(E e) {
			this.e = e;
			left = null;
			right = null;
		}
	}

	public Node root;
	private int size;

	public BST() {
		root = null;
		size = 0;
	}

	public int size() {
		return size;
	}

	public boolean isEmpty() {
		return size == 0;
	}

	public void add(E e) {
		root = add(root, e);
	}

	private Node add(Node node, E e) {
		/*if( node.e == e ) return;
		if( e.compareTo(node.e) > 0 && node.right == null ) {
			node.right = new Node(e);
			size ++;
			return;
		}
		if( e.compareTo(node.e) < 0 && node.left == null ) {
			node.left = new Node(e);
			size ++;
			return;
		}

		Node next = e.compareTo(node.e) > 0 ? node.right : node.left;
		return add(next, e);*/

		if( node == null ) {
			size ++;
			return new Node(e);
		}

		if( e.compareTo(node.e) > 0 ) {
			node.right = add(node.right, e);
		} else if( e.compareTo(node.e) < 0 ) {
			node.left = add(node.left, e);
		}

		return node;
	}

	public boolean contains(E e) {
		return contains(root, e);
	}

	private boolean contains(Node node, E e) {
		if( node == null ) return false;

		int res = e.compareTo(node.e);
		if( res > 0 ) {
			return contains(node.right, e);
		} else if( res < 0 ) {
			return contains(node.left, e);
		} else {
			return true;
		}
	}

	public void preOrder() {
		preOrder(root);
	}

	private void preOrder(Node node) {
		if( node == null ) return;
		System.out.println(node.e);
		preOrder(node.left);
		preOrder(node.right);
	}
	// 非递归前序遍历
	public void preOrderNR() {
		Stack<Node> stack = new Stack<>();
		stack.push(root);

		while( !stack.isEmpty() ) {
			Node cur = stack.pop();
			System.out.println(cur.e);

			if( cur.right != null ) stack.push(cur.right);
			if( cur.left != null ) stack.push(cur.left);
		}
	}

	public void inOrder() {
		inOrder(root);
	}

	private void inOrder(Node node) {
		if( node == null ) return;
		inOrder(node.left);
		System.out.println(node.e);
		inOrder(node.right);
	}

	public void postOrder() {
		postOrder(root);
	}

	private void postOrder(Node node) {
		if( node == null ) return;
		postOrder(node.left);
		postOrder(node.right);
		System.out.println(node.e);
	}

	public void levelOrder() {
		Queue<Node> q = new LinkedList<>();
		q.add(root);

		while( !q.isEmpty() ) {
			Node cur = q.remove();
			System.out.println(cur.e);

			if( cur.left != null ) q.add(cur.left);
			if( cur.right != null ) q.add(cur.right);
		}
	}

	public E minimum() {
		if( size == 0 ) {
			throw new IllegalArgumentException("BST is empty!");
		}
		return minimum(root).e;
	}
	private Node minimum(Node node) {
		if( node.left == null ) {
			return node;
		}
		return minimum(node.left);
	}

	public E maximum() {
		if( size == 0 ) {
			throw new IllegalArgumentException("BST is empty!");
		}
		return maximum(root).e;
	}
	private Node maximum(Node node) {
		if( node.right == null ) {
			return node;
		}
		return maximum(node.right);
	}

	public E removeMin() {
		E ret = minimum();
		root = removeMin(root);
		return ret;
	}
	private Node removeMin(Node node) {
		if( node.left == null ) {
			Node rightNode = node.right;
			node.right = null;
			size --;
			return rightNode;
		}

		node.left = removeMin(node.left);
		return node;
	}

	public E removeMax() {
		E ret = maximum();
		root = removeMax(root);
		return ret;
	}
	private Node removeMax(Node node) {
		if( node.right == null ) {
			Node leftNode = node.left;
			node.left = null;
			size --;
			return leftNode;
		}

		node.right = removeMax(node.right);
		return node;
	}

	public void remove(E elm) {
		if( size == 0 )
			throw new IllegalArgumentException("BST is empty!");
		if( !contains(e) )
			throw new IllegalArgumentException("elm not found!");

		root = remove(root, e);
	}
	private Node remove(Node node, E e) {
		if( node == null )
			return null;

		if( node.e.compareTo(e) < 0 ) {
			node.right = remove(node.right, e);
			return node;
		} else if( node.e.compareTo(e) > 0 ) {
			node.left = remove(node.left, e);
			return node;
		} else { // node = 删除节点
			if( node.left == null ) {
				Node rightNode = node.right;
				node.right = null;
				size --;
				return rightNode;
			}

			if( node.right == null ) {
				Node leftNode = node.left;
				node.left = null;
				size --;
				return leftNode;
			}

			Node successor = minimum(node.right);
			successor.right = removeMin(node.right); // 把继任从右子树删除，返回的右子树根节点赋值给继任右节点
			successor.left = node.left;

			node.right = node.left = null;
			return successor;
		}
	}

	@Override
	public String toString() {
		StringBuilder res = new StringBuilder();
		generateBSTString(root, 0, res);
		return res.toString();
	}

	private void generateBSTString(Node node, int depth, StringBuilder res) {
		if( node == null ) {
			res.append(generateDepthString(depth) + "null\n");
			return;
		}

		res.append(generateDepthString(depth) + node.e + "\n");
		generateBSTString(node.left, depth+1, res);
		generateBSTString(node.right, depth+1, res);
	}

	private String generateDepthString(int depth) {
		StringBuilder res = new StringBuilder();
		for( int i=0; i<depth; i++ ) {
			res.append("--");
		}
		return res.toString();
	}
}