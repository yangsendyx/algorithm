const BST = require('./BST');

const num20 = s => {
	var stack = [];
    var len = s.length;
    var maps = { '[': ']', '{': '}', '(': ')' };
    for( var i = 0; i < len; i++ ) {
        var c = s.charAt(i);
        if( c === '{' || c === '[' || c === '(' ) {
            stack.push( c );
        } else {
            if( !stack.length ) return false;
            var top = stack.pop();
            if( maps[top] !== c ) return false;
        }
    }
    
    if( !stack.length ) return true;
    return false;
};
exports.test20 = s => console.log( num20(s) );

function ListNode(val) {
    this.val = val;
    this.next = null;
    this.toString = () => {
        let res = '';
        let cur = this;

        while( cur ) {
            res += `${cur.val} => `;
            cur = cur.next;
        }
        return `${res}NULL`;
    };
}
const num203 = (head, val) => {
    /*while( head && head.val === val ) {
        const delNode = head;
        head = delNode.next;
        delNode.next = null;
    }
    if( !head ) return head;

    let prev = head;
    while( prev.next ) {
        if( prev.next.val === val ) {
            const delNode = prev.next;
            prev.next = delNode.next;
            delNode.next = null;
        } else {
            prev = prev.next;
        }
    }
    return head;*/

    /*const dummyHead = new ListNode(0);
    dummyHead.next = head;

    let prev = dummyHead;
    while( prev.next ) {
        if( prev.next.val === val ) {
            const delNode = prev.next;
            prev.next = delNode.next;
            delNode.next = null;
        } else {
            prev = prev.next;
        }
    }
    return dummyHead.next;*/

    if( !head ) return null;
	head.next = num203(head.next, val);
	return head.val == val ? head.next : head;
};
exports.test203 = (nums, val) => {
    const dummyHead = new ListNode(-1);
    let cur = dummyHead;
    nums.forEach(item => {
        cur.next = new ListNode(item);
        cur = cur.next;
    });

    let head = dummyHead.next;
    console.log("入  " + (head ? head.toString() : head) + "  删除" + val);
    head = num203(head, val);
    console.log("出  " + (head ? head.toString() : head));
};
export const num804 = words => {
    const set = new Set();
    const baseNum = 'a'.charCodeAt();
    const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    for(let word of words) {
        const res = [];
        word.split('').forEach(letter => res.push(codes[letter.charCodeAt()-baseNum]));
        set.add(res.join(''));
    }
    return set.size;
};

exports.test938 = (root, L, R) => {
    var rangeSumBST = function(root, L, R) {
        if( !root ) return 0;

        if( root.val < L ) return rangeSumBST(root.right, L, R);
        if( root.val > R ) return rangeSumBST(root.left, L, R);
        if( root.val >= L && root.val <= R ) {
            return root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
        }
    };
};
// 合并二叉树
exports.test617 = () => {
    var mergeTrees = function(t1, t2) {
        if( !t1 && !t2 ) return null;
        if( !t1 ) return t2;
        if( !t2 ) return t1;

        const node = new TreeNode(t1.val + t2.val);
        node.left = mergeTrees(t1.left, t2.left);
        node.right = mergeTrees(t1.right, t2.right);

        return node;
    };
};
// 翻转二叉树
exports.test226 = () => {
    var invertTree = function(root) {
        if( !root ) return null;

        const node = new TreeNode(root.val);
        const lNode = invertTree(root.left);
        node.right = lNode;
        const rNode = invertTree(root.right);
        node.left = rNode;

        return node;
    };
};
// 二叉树最大深度
exports.test104 = () => {
    var maxDepth = function(root) {
        if( !root ) return 0;

        /*let depth = 0;
        const arr = [];

        root.val = 1;
        arr.push(root);

        while( arr.length ) {
            const node = arr.shift();
            depth = node.val;

            if( node.left ) {
                node.left.val = depth + 1;
                arr.push(node.left);
            }
            if( node.right ) {
                node.right.val = depth + 1;
                arr.push(node.right);
            }
        }

        return depth;*/

        const lDepth = maxDepth(root.left);
        const rDepth = maxDepth(root.right);
        return Math.max(lDepth, rDepth) + 1;
    };
};
// 二叉树中序遍历
exports.test94 = () => {
    var inorderTraversal = function(root) {
        /*let numbers = [];
        if( !root ) return numbers;

        numbers = inorderTraversal(root.left);
        numbers.push(root.val);
        numbers = numbers.concat(inorderTraversal(root.right));

        return numbers;*/

        if( !root ) return [];

        const arr = [];
        const numbers = [];
        arr.push( root );

        let cur = root;
        while( arr.length ) {
            if( !cur ) {
                const node = arr.pop();
                numbers.push( node.val );

                cur = node.right;
                if( cur ) arr.push(cur);
            } else {
                cur = cur.left;
                if( cur ) arr.push(cur);
            }
        }

        return numbers;
    };
};
// 二叉树层次遍历
exports.test107 = () => {
    var levelOrderBottom = function(root) {
        if( !root ) return [];

        root.depth = 0;
        const arr = [root];
        const numbers = [[]];

        while( arr.length ) {
            const node = arr.shift();
            numbers[node.depth].push(node.val);

            const index = node.depth + 1;
            if( !numbers[index] && (node.left || node.right) ) numbers[index] = [];

            if( node.left ) {
                node.left.depth = index;
                arr.push(node.left);
            }
            if( node.right ) {
                node.right.depth = index;
                arr.push(node.right);
            }
        }
        return numbers.reverse();
    };
};
