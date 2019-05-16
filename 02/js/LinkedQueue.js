
class Node {
	constructor(elm, next) {
		this.elm = elm === undefined ? null : elm;
		this.next = next === undefined ? null : next;
	}

	toString() {
		return String(this._elm);
	}
}

class LinkedQueue {
	constructor() {
		this._head = null;
		this._tail = null;
		this._size = 0;
	}

	error(message) { return new Error(message) }
	getSize() { return this._size; }
	isEmpty() { return this._size === 0; }

	enqueue(elm) {
		// 初始为空时
		if( !this._tail ) {
			this._tail = new Node(elm);
			this._head = this._tail;
		} else {
			const node = new Node(elm);
			this._tail.next = node;
			this._tail = node;
		}

		this._size ++;
	}
	dequeue() {
		if( !this._head ) throw this.error('Cannot dequeue from an empty queue.');

		const delNode = this._head;
		this._head = delNode.next;
		delNode.next = null;

		if( !this._head ) this._tail = null;

		this._size --;
		return delNode.elm;
	}
	getFront() {
		if( !this._head ) throw this.error('Queue is empty.');
		return this.head.elm;
	}

	toString() {
		let res = 'front ';
		for( let cur = this._head; cur != null; cur = cur.next ) {
			res += `${cur.elm} => `;
		}
		return `${res}NULL tail`;
	}
}

module.exports = LinkedQueue;