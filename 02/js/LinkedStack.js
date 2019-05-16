
const Linked = require('./Linked');

class LinkedStack {
	constructor() {
		this._list = new Linked();
	}

	toString() { return `Stack: top ${this._list.toString()}`; }
	getSize() { return this._list.getSize(); }
	isEmpty() { return this._list.isEmpty(); }
	push(elm) { this._list.addFirst(elm); }
	pop() { return this._list.removeFirst(); }
	peek() { return this._list.getFirst(); }
}

module.exports = LinkedStack;