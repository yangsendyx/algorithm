
class Queue {
	constructor(capacity) {
		const initCapacity = typeof capacity === 'number' ? capacity+1 : 11;
		this._data = Array(initCapacity);
		this._front = 0;
		this._tail = 0;
		this._size = 0;
	}
	error(message) { return new Error(message); }
	toString() {
		const list = this._data.filter(item => !!item || item === 0 || item === false);
		return `front [ ${list.join(', ')} ] tail`;
	}

	getCapacity() { return this._data.length - 1; }
	getSize() { return this._size; }
	isEmpty() { return this._front === this._tail; }

	enqueue(elm) {
		if( (this._tail + 1) % this._data.length === this._front ) this.resize(this.getCapacity() * 2);

		this._data[this._tail] = elm;
		this._tail = (this._tail + 1) % this._data.length;
		this._size ++;
	}
	dequeue() {
		if( this.isEmpty() ) throw this.error('Cannot dequeue from an empty queue.');

		const res = this._data[this._front];
		this._data[this._front] = null;

		this._front = ( this._front + 1 ) % this._data.length;
		this._size --;

		const capacity = this.getCapacity();
		const getVal = val => Math.floor( capacity / val );
		if( this._size <= getVal(4) && getVal(2) != 0 ) this.resize(getVal(2));

		return res;
	}
	getFront() {
		if( this.isEmpty() ) throw this.error('Queue is empty.');
		return this._data[this._front];
	}

	resize(newCapacity) {
		const newData = Array(newCapacity + 1);
		for( let i = 0; i < this._size; i++ ) {
			const index = (i + this._front) % this._data.length;
			newData[i] = this._data[index];
		}

		this._data = newData;
		this._front = 0;
		this._tail = this._size;
	}
}

module.exports = Queue;