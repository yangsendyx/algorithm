const Array = require('./Array.js');

class ArrayQueue {
	constructor() {
		this._array = new Array();
	}

	toString() { return `front [ ${this._array.toString().join(', ')} ] tail`; }
	getSize() { return this._array.getSize(); }
	isEmpty() { return this._array.isEmpty(); }

	enqueue(elm) { this._array.addLast(elm); }
	dequeue() { return this._array.removeFirst(); }
	getFront() { return this._array.getFirst(); }
}

module.exports = ArrayQueue;