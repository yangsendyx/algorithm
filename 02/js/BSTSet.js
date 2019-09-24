
const BST = require('./BST.js');

class BSTSet {
	constructor() {
		this.bst = new BST();
	}

 	getSize() {
		return this.bst.size;
	};
	
	isEmpty() {
		return this.bst.isEmpty();
	};

	add(e) {
		this.bst.add(e);
	};

	remove(e) {
		this.bst.remove(e);
	};

	contains(e) {
		return this.bst.contains(e);
	};
}

module.exports = BSTSet;