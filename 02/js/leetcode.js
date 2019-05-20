
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