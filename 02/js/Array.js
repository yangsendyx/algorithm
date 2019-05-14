
class Array {

	constructor() {
		this._data = [];
	}

	error(message) { return new Error(message); }
	toString() { return this._data; }

	getSize() { return this._data.length; }
	isEmpty() { return !!this._data.length; }

	addFirst(elm) { return this.add(0, elm); }
	addLast(elm) { return this.add(this.getSize(), elm); }
	add(index, elm) {
		const size = this.getSize() + 1;
		if( index < 0 || index >= size ) throw this.error('Add failed. Require index >=0 and index <= size.');
		this._data.splice(index, 0, elm);
	}

	getFirst() { return this.get(0); }
	getLast(){ return this.get(this.getSize() - 1); }
	get(index) {
		const size = this.getSize();
		if( index < 0 || index >= size ) throw this.error('Get failed. Index is illegal.');
		return this._data[index];
	}
	
	set(index, elm) {
		const size = this.getSize();
		if( index < 0 || index >= size ) throw this.error('Set failed. Index is illegal.');
		this._data[index] = elm;
	}
	find(elm) {
		const size = this.getSize();
		for( let i = 0; i < size; i++ ) {
			if( this._data[i] === elm ) return i;
		}

		return -1;
	}
	contains(elm) {
		const size = this.getSize();
		for( let i = 0; i < size; i++ ) {
			if( this._data[i] === elm ) return true;
		}
		return false;
	}

	removeFirst() { return this.remove(0); }
	removeLast() { return this.remove(this.getSize()-1); }
	remove(index) {
		const size = this.getSize();
		if( index < 0 || index >= size ) throw this.error('Remove failed. Index is illegal.');
		return this._data.splice(index, 1);
	}
	removeElement(elm) {
		const index = this.find(elm);
		if( index === -1 ) return false;

		this.remove(index);
		return true;
	}
}

module.exports = Array;