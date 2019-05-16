
class Stack {
	constructor() {
		this._data = [];
	}

	toString() { return `[ ${this._data.join(', ')} ] top`; }
	getSize() { return this._data.length; }
	isEmpty() { return !!this._data.length; }
	push(elm) { this._data.push(elm); }
	pop() { return this._data.shift(); }
	peek() { return this._data(this._data.length-1); }
}

module.exports = Stack;