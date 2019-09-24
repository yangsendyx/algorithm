const Array = require('./Array');
const ArrayQueue = require('./ArrayQueue');
const Stack = require('./Stack');
const Queue = require('./Queue');
const Linked = require('./Linked');
const LinkedStack = require('./LinkedStack');
const LinkedQueue = require('./LinkedQueue');
const BST = require('./BST');
const BSTSet = require('./BSTSet');
const FileOperation = require('./FileOperation');

const leetCode = require('./leetcode');

const ArrayTest = () => {
    const arr = new Array();
    for( let i=0; i<10; i++ ) {
        arr.addLast(i);
    }
    console.log( arr.toString() );

    arr.add(1, 100);
    console.log( arr.toString() );

    arr.addFirst(-1);
    console.log( arr.toString() );

    arr.remove(2);
    console.log( arr.toString() );

    arr.removeElement(4);
    console.log( arr.toString() );

    arr.removeFirst();
    console.log( arr.toString() );
};

const testStackTime = (stack, count) => {
    const startTime = Date.now();

    for( let i = 0; i < count; i++ ) stack.push( Math.random() );
    for( let i = 0; i < count; i++ ) stack.pop();

    const endTime = Date.now();
    return ( endTime - startTime ) / 1000;
};
const StackTest = () => {
    /*const stack1 = new Stack();
    for( let i=0; i<5; i++ ) {
        stack1.push(i);
        console.log( stack1.toString() );
    }
    stack1.pop();
    console.log( stack1.toString() );

    const stack2 = new LinkedStack();
    for( let i=0; i<5; i++ ) {
        stack2.push(i);
        console.log( stack2.toString() );
    }
    stack2.pop();
    console.log( stack2.toString() );*/

    let opCount = 10000000;

    // arrayStack基于 js 数组实现，超过百万时间过百秒，慎测
    // const arrayStack = new Stack();
    // const time1 = testStackTime(arrayStack, opCount);
    // console.log(`ArrayStack, time: ${time1} s`);

    const linkedStack = new LinkedStack();
    const time2 = testStackTime(linkedStack, opCount);
    console.log(`LinkedStack, time: ${time2} s`);
};

const testQueueTime = (queue, count) => {
    const startTime = Date.now();

    for( let i = 0; i < count; i++ ) queue.enqueue( Math.random() );
    for( let i = 0; i < count; i++ ) queue.dequeue();

    const endTime = Date.now();
    return ( endTime - startTime ) / 1000;
};
const QueueTest = () => {
    /*const queue1 = new ArrayQueue();
    for( let i=0; i<10; i++ ) {
        queue1.enqueue(i);
        console.log( queue1.toString() );
        if( i%3 == 2 ) {
            queue1.dequeue();
            console.log( queue1.toString() );
        }
    }

    const queue2 = new Queue(10);
    for( let i=0; i<10; i++ ) {
        queue2.enqueue(i);
        console.log( queue2.toString() );
        if( i%3 == 2 ) {
            queue2.dequeue();
            console.log( queue2.toString() );
        }
    }

    const queue3 = new LinkedQueue(10);
    for( let i=0; i<10; i++ ) {
        queue3.enqueue(i);
        console.log( queue3.toString() );
        if( i%3 == 2 ) {
            queue3.dequeue();
            console.log( queue3.toString() );
        }
    }*/

    let opCount = 100000;

    const arrayQueue = new ArrayQueue();
    const time1 = testQueueTime(arrayQueue, opCount);
    console.log(`ArrayQueue, time: ${time1} s`);

    const LoopQueue = new Queue();
    const time2 = testQueueTime(LoopQueue, opCount);
    console.log(`LoopQueue, time: ${time2} s`);

    const linkedQueue = new LinkedQueue();
    const time3 = testQueueTime(linkedQueue, opCount);
    console.log(`LinkedQueue, time: ${time3} s`);
};

const LinkedTest = () => {
    const linkedList = new Linked();
    for( let i=0; i<5; i++ ) {
        linkedList.addFirst(i);
    }
    console.log( linkedList.toString() );

    linkedList.add(2, 666);
    console.log( linkedList.toString() );

    linkedList.remove(2);
    console.log( linkedList.toString() );

    linkedList.removeFirst();
    console.log( linkedList.toString() );

    linkedList.removeLast();
    console.log( linkedList.toString() );
};

const BSTTest = () => {
    const bst = new BST();
    const nums = [5,3,6,8,4,2];
    for( let num of nums ) {
        bst.add(num);
    }

    /*bst.preOrder();
    console.log('\n');

    bst.preOrderNR();
    console.log('\n');*/

    /*bst.levelOrder();
    console.log('\n');*/

    // console.log(bst.toString());

    // bst.inOrder();
    // console.log('\n');

    // bst.postOrder();
    // console.log('\n');
};

const BSTSetTest = async () => {
    const basePath = `${__dirname}/../build`;

    console.log('Pride and Prejudice');
    const words1 = await FileOperation(`${basePath}/pride-and-prejudice.txt`);
    if( words1 ) {
        console.log('Total words: ', words1.length);
        const set1 = new BSTSet();
        words1.forEach(word => set1.add(word));
        console.log('Total different words: ', set1.getSize());
    }

    console.log('\nA Tale of Two Cities');
    const words2 = await FileOperation(`${basePath}/a-tale-of-two-cities.txt`);
    if( words2 ) {
        console.log('Total words: ', words2.length);
        const set2 = new BSTSet();
        words2.forEach(word => set2.add(word));
        console.log('Total different words: ', set2.getSize());
    }
};

function main() {
    console.log('Start.');
    // LeetCodeTest();

    // ArrayTest();
    // StackTest();
    // QueueTest();
    // LinkedTest();
    // BSTTest();
    BSTSetTest();
}

function LeetCodeTest() {
    /*leetCode.test20('{[]}');
    leetCode.test20('([)]');*/

    /*leetCode.test203([1,2,6,3,4,5,6], 6);
    leetCode.test203([1], 1);
    leetCode.test203([], 1);*/
}

main();