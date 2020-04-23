const SArray = global.Array;
const Array = require('./Array.js');

class MaxHeap {
    constructor(arr) {
        if( arr && SArray.isArray(arr) ) {
            this.data = new Array(arr);
            this.heapify();
        } else {
            this.data = new Array();
        }
    }

    heapify() {
        let index = this._parent(this.size()-1);
        while( index >= 0 ) {
            this._siftDown(index);
            index--;
        }
    }

    size() { return this.data.getSize(); }
    isEmpty() { return this.data.isEmpty(); }

    _parent(index) {
        if( index === 0 ) throw new Error("index-0 doesn't have parent.");
        return Math.floor(( index - 1 ) / 2);
    }
    _lchild(index) { return index * 2 + 1; }
    _rchild(index) { return index * 2 + 2; }

    findMax() {
        if( this.size() === 0 ) throw new Error("Can not findMax when heap is empty.");
        return this.data.get(0);
    }

    add(elm) {
        this.data.addLast(elm);
        this._siftUp(this.size() - 1);
    }
    _siftUp(index) {
        while( index > 0 ) {
            const pindex = this._parent(index);
            if( this.data.get(index) > this.data.get(pindex) ) {
                this.data.swap(index, pindex);
                index = pindex;
            } else {
                index = 0;
            }
        }
    }

    extractMax() {
        const max = this.findMax();
        this.data.swap(0, this.size()-1);
        this.data.removeLast();

        this._siftDown(0);
        return max;
    }
    _siftDown(index) {
        let v = this._lchild(index);
        if( v < this.size() ) {
            const r = this._rchild(index);
            if( r < this.size() && this.data.get(r) > this.data.get(v) ) {
                v = r;
            }

            if( this.data.get(index) < this.data.get(v) ) {
                this.data.swap(index, v);
                this._siftDown(v);
            }
        }
    }

    replace(elm) {
        const max = this.findMax();
        this.data.set(0, elm);

        this._siftDown(0);
        return max;
    }
};

module.exports = MaxHeap;