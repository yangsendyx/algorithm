const Array = require('./Array');

class Stack {
	constructor() {
		this._array = new Array();
	}

	toString() { return `[ ${this._array.toString().join(', ')} ] top`; }
	getSize() { return this._array.getSize(); }
	isEmpty() { return this._array.isEmpty(); }
	push(elm) { this._array.addLast(elm); }
	pop() { return this._array.removeLast(); }
	peek() { return this._array.getLast(); }
}

module.exports = Stack;