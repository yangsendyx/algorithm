const MaxHeap = require('./MaxHeap');

module.exports = class {
    constructor() {
        this.maxHeap = new MaxHeap();
    }

    getFront () {
        return this.maxHeap.findMax();
    }

    getSize() {
        return this.maxHeap.size();
    }

    isEmpty() {
        return this.maxHeap.isEmpty();
    }

    enqueue(elm) {
        this.maxHeap.add(elm);
    }

    dequeue() {
        return this.maxHeap.extractMax();
    }
};