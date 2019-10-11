
class Node {
    constructor(key, value, next) {
        this.key = key || null;
        this.value = value || null;
        this.next = next || null;
    }
    toString() {
        return `${this.key}: ${this.value}`;
    }
}

class LinkedMap {
    constructor() {
        this.dummyHead = new Node();
        this.size = 0;
    }

    getNode(key) {
        let cur = this.dummyHead.next;
        while( cur != null ) {
            if( cur.key === key ) return cur;
            cur = cur.next;
        }
        return null;
    }

    getSize() { return this.size; }
    isEmpty() { return (this.size === 0); }
    contains(key) { return (this.getNode(key) !== null); }

    get(key) { return ((this.getNode(key) || {}).value || null); }
    set(key, value) {
        const node = this.getNode(key);
        if( !node ) console.warn(`${key} doesn't exist!`);
        node.value = value;
    };

    add(key, value) {
        const node = this.getNode(key);
        if( !node ) {
            this.dummyHead.next = new Node(key, value, this.dummyHead.next);
            this.size ++;
        } else {
            node.value = value;
        }
    };
    remove(key) {
        const prev = this.dummyHead;
        while( prev.next ) {
            if( prev.next.key === key ) {
                const delNode = prev.next;
                prev.next = delNode.next;
                delNode.next = null;
                this.size --;
                return delNode.value;
            }
        }
        return null;
    };
}

module.exports = LinkedMap;
