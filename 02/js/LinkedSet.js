

const Linked = require('./Linked.js');

class LinkedSet {
	constructor() {
		this.list = new Linked();
	}

 	getSize() {
		return this.list.getSize();
	};
	
	isEmpty() {
		return this.list.isEmpty();
	};

	contains(e) {
		return this.list.contains(e);
	};

	add(e) {
		if( !this.list.contains(e) ) {
            this.list.addFirst(e);
        }
	};

	remove(e) {
		this.list.removeElement(e);
	};
}

module.exports = LinkedSet;