
public class BSTMap<K extends Comparable<K>, V> implements Map<K, V> {
    private class Node {
        public K key;
        public V value;
		public Node left, right;

		public Node(K key, V value) {
            this.key = key;
            this.value = value;
            this.left = null;
            this.right = null;
		}
    }

    private Node root;
    private int size;

    BSTMap() {
        root = null;
        size = 0;
    }

    private Node getNode(Node node, K key) {
        if( node == null ) return null;

        if( key.compareTo(node.key) == 0 ) {
            return node;
        } else if( key.compareTo(node.key) > 0 ) {
            return getNode(node.right, key);
        } else {
            return getNode(node.left, key);
        }
    }

    @Override
    public int getSize() { return size; }
    
    @Override
    public boolean isEmpty() { return size == 0; }

    @Override
    public boolean contains(K key) { return getNode(root, key) != null; }

    @Override
    public V get(K key) {
        Node node = getNode(root, key);
        return node == null ? null : node.value;
    }

    @Override
    public void set(K key, V value) {
        Node node = getNode(root, key);
        if( node == null ) throw new IllegalArgumentException(key + " doesn't exist!");
        node.value = value;
    }
    
    @Override
    public void add(K key, V value) { root = add(root, key, value); }
	private Node add(Node node, K key, V value) {
		if( node == null ) {
			size ++;
			return new Node(key, value);
		}

		if( key.compareTo(node.key) > 0 ) {
			node.right = add(node.right, key, value);
		} else if( key.compareTo(node.key) < 0 ) {
			node.left = add(node.left, key, value);
		} else {
            node.value = value;
        }

		return node;
	}

    @Override
    public V remove(K key) {
        Node node = getNode(root, key);
        if( node != null ) {
            root = remove(root, key);
            return node.value;
        }
        return null;
    }
    private Node remove(Node node, K key) {
        if( node == null ) return null;

        if( key.compareTo(node.key) > 0 ) {
            node.right = remove(node.right, key);
			return node;
        } else if ( key.compareTo(node.key) < 0 ) {
            node.left = remove(node.left, key);
			return node;
        } else {
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
	private Node minimum(Node node) {
		if( node.left == null ) return node;
		return minimum(node.left);
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
}