const Stack = require('./LinkedStack');
const Queue = require('./LinkedQueue.js');
// Binary Search Tree
class Node {
	constructor(elm) {
		this.elm = elm;
		this.left = null;
		this.right = null;
	}

	toString() {
		return String(this.elm);
	}
}

class BST {
	constructor() {
		this.size = 0;
		this.root = null;
	}

	size() { return this.size; }
	isEmpty() { return this.size === 0; }

	// compare=fn; return [-1, 0, 1];
	add(elm, compare) { this.root = this._add(this.root, elm, compare); }
	_add(node, elm, compare) {
		if( !node ) {
			this.size ++;
			return new Node(elm);
		}

		const compareRes = compare ? (
			compare(elm, node.elm)
		) : (
			elm === node.elm ? 0 : elm > node.elm ? 1 : -1
		);

		// if( compareRes === 0 ) 
		if( compareRes > 0 ) {
			node.right = this._add(node.right, elm, compare);
		} else if( compareRes < 0 ) {
			node.left = this._add(node.left, elm, compare);
		}

		return node;
	}

	// compare=fn; return [-1, 0, 1];
	contains(elm, compare) { return this._contains(this.root, elm, compare); }
	_contains(node, elm, compare) {
		if( !node ) return false;

		const compareRes = compare ? (
			compare(elm, node.elm)
		) : (
			elm === node.elm ? 0 : elm > node.elm ? 1 : -1
		);

		if( compareRes === 0 ) {
			return true;
		} else if( compareRes > 0 ) {
			return this._contains(node.right, elm, compare);
		} else if( compareRes < 0 ) {
			return this._contains(node.left, elm, compare);
		}
	}

	preOrder() { this._preOrder(this.root); }
	_preOrder(node, compare) {
		if( !node ) return;
		console.log( node.toString() );
		this._preOrder(node.left);
		this._preOrder(node.right);
	}
	// 非递归前序遍历
	preOrderNR() {
		const stack = new Stack();
		stack.push(this.root);

		while( !stack.isEmpty() ) {
			const cur = stack.pop();
			console.log( cur.toString() );

			if( cur.right ) stack.push( cur.right );
			if( cur.left ) stack.push( cur.left );
		}
	}

	inOrder() { this._inOrder(this.root); }
	_inOrder(node, compare) {
		if( !node ) return;
		this._inOrder(node.left);
		console.log( node.toString() );
		this._inOrder(node.right);
	}

	postOrder() { this._postOrder(this.root); }
	_postOrder(node, compare) {
		if( !node ) return;
		this._postOrder(node.left);
		this._postOrder(node.right);
		console.log( node.toString() );
	}

	levelOrder() {
		const q = new Queue();
		q.enqueue(this.root);

		while( !q.isEmpty() ) {
			const cur = q.dequeue();
			console.log( cur.toString() );

			if( cur.left != null ) q.enqueue(cur.left);
			if( cur.right != null ) q.enqueue(cur.right);
		}
	}

	toString() {
		let res = [];
		this._generateBSTString(this.root, 0, res);
		return res.join('');
	}
	_generateBSTString(node, depth, res) {
		if( !node ) {
			res.push(`${this._generateDepthString(depth)}null\n`);
			return;
		}

		res.push(`${this._generateDepthString(depth)}${node.toString()}\n`);
		this._generateBSTString(node.left, depth+1, res);
		this._generateBSTString(node.right, depth+1, res);
	}
	_generateDepthString(depth) {
		let res = [];
		for( let i=0; i<depth; i++ ) {
			res.push('--');
		}
		return res.join('');
	}
}

module.exports = BST;