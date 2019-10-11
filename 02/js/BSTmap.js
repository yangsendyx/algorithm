
class Node {
    constructor(key, value) {
        this.key = key || null;
        this.value = value || null;
        this.left = null;
        this.right = null;
    }
}

class BSTMap {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    compare(compareFn, key, node) {
        return compareFn ? (
			compareFn(key, node.key)
		) : (
			key === node.key ? 0 : key > node.key ? 1 : -1
        );
    }

    getNode(node, key, compare) {
        if( node == null ) return null;

        const compareRes = this.compare(compare, key, node);
        if( compareRes === 0 ) {
            return node;
        } else if( compareRes > 0 ) {
			return this.getNode(node.right, key, compare);
		} else {
			return this.getNode(node.left, key, compare);
		}
    }

    getSize() { return this.size; }
    isEmpty() { return this.size === 0; }
    contains(key) { return !!this.getNode(this.root, key); }

    get(key, log) { return ((this.getNode(this.root, key) || {}).value || null); }
    set(key, value) {
        const node = this.getNode(this.root, key);
        if( !node ) return console.warn(`${key} doesn't exist!`);
        node.value = value;
    }

    add(key, value, compare) { this.root = this._add(this.root, key, value, compare); }
    _add(node, key, value, compare) {
        if( !node ) {
            this.size ++;
            return new Node(key, value);
        }

        const compareRes = this.compare(compare, key, node);
        if( compareRes > 0 ) {
            node.right = this._add(node.right, key, value, compare);
        } else if ( compareRes < 0 ) {
            node.left = this._add(node.left, key, value, compare);
        } else {
            node.value = value;
        }

        return node;
    }

    remove(key, compare) {
        const node = this.getNode(this.root, key, compare);
        if( node ) {
            root = this._remove(this.root, key, compare);
            return node.value;
        }
        return null;
    }
    _remove(node, key, compare) {
        if( !node ) return null;

        const compareRes = this.compare(compare, key, node);
        if( compareRes > 0 ) {
            node.right = this._remove(node.right, key, compare);
        } else if ( compareRes < 0 ) {
            node.left = this._remove(node.left, key, compare);
        } else {
            if( !node.left ) {
				const rightNode = node.right;
				node.right = null;
				this.size --;
				return rightNode;
			}

			if( !node.right ) {
				const leftNode = node.left;
				node.left = null;
				this.size --;
				return leftNode;
			}

			const successor = minimum(node.right);
			successor.right = removeMin(node.right); // 把继任从右子树删除，返回的右子树根节点赋值给继任右节点
			successor.left = node.left;

            node.right = null;
            node.left = null;
			return successor;
        }
    }
    _minimum(node) {
        if( !node.left ) return node;
        return this.minimum(node.left);
    }
    _removeMin(node) {
        if( !node.left ) {
            const rightNode = node.right;
            node.right = null;
            this.size --;
            return rightNode;
        }

        node.left = this._removeMin(ndoe.left);
        return node;
    }
}

module.exports = BSTMap;
