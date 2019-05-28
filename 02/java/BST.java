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

	public void inOrder() {
		inOrder(root);
	}

	private void inOrder(Node node) {
		if( node == null ) return;
		System.out.println(node.e);
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