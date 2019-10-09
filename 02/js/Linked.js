
class Node {
	constructor(elm, next) {
		this.elm = elm === undefined ? null : elm;
		this.next = next === undefined ? null : next;
	}

	toString() {
		return String(this._elm);
	}
}

class Linked {
	constructor() {
		this._dummyHead = new Node();
		this._size = 0;
	}

	error(message) { return new Error(message) }

	getSize() { return this._size; }
	isEmpty() { return this._size === 0; }

	addFirst(elm) { this.add(0, elm); }
	addLast(elm) { this.add(size, elm) }
	add(index, elm) {
		if( index < 0 || index > this._size ) throw this.error('Add failed. Index is illegal.');

		let prev = this._dummyHead;
		for( let i=0; i<index; i++ ) prev = prev.next;
		prev.next = new Node(elm, prev.next);
		this._size ++;
	}

	removeFirst() { return this.remove(0); }
	removeLast() { return this.remove(this._size - 1); }
	removeElement(elm) {
		const index = this.getIndex(elm);
		if( index >= 0 ) this.remove(index);
	}
	remove(index) {
		if( index < 0 || index > this._size ) throw this.error('Remove failed. Index is illegal.');

		let prev = this._dummyHead;
		for( let i=0; i<index; i++ ) prev = prev.next;

		const delNode = prev.next;
		prev.next = delNode.next;

		delNode.next = null;
		this._size --;

		return delNode.elm;
	}

	getFirst() { return this.get(0); }
	getLast() { return this.get(this._size - 1); }
	get(index) {
		if( index < 0 || index > this._size ) throw this.error('Get failed. Index is illegal.');

		let prev = this._dummyHead;
		for( let i=0; i<index; i++ ) {
			prev = prev.next;
		}

		const cur = prev.next;
		return cur.elm;
	}

	set(index, elm) {
		if( index < 0 || index > this._size ) throw this.error('Get failed. Index is illegal.');

		let prev = this._dummyHead;
		for( let i=0; i<index; i++ ) {
			prev = prev.next;
		}

		const cur = prev.next;
		cur.elm = elm;
	}
	contains(elm) {
		const index = this.getIndex(elm);
		return index >= 0;
	}
	getIndex(elm) {
		let cur = this._dummyHead.next;
		let index = 0;
		while( cur !== null ) {
			if( cur.elm === elm ) return index;
			cur = cur.next;
			index++;
		}

		return -1;
	}

	toString() {
		let res = '';
		for( let cur = this._dummyHead.next; cur != null; cur = cur.next ) {
			res += `${cur.elm} => `;
		}
		return `${res}NULL`;
	}
}

module.exports = Linked;