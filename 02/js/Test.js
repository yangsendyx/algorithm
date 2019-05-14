const Array = require('./Array');
const Stack = require('./Stack');
const ArrayQueue = require('./ArrayQueue');
const Queue = require('./Queue');

var isValid = function(s) {
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

const StackTest = () => {
    const stack = new Stack();

    for( let i=0; i<5; i++ ) {
        stack.push(i);
        console.log( stack.toString() );
    }

    stack.pop();
    console.log( stack.toString() );
};

const testQueueTime = (queue, count) => {
    const startTime = Date.now();

    for( let i = 0; i < count; i++ ) queue.enqueue( Math.random() );
    for( let i = 0; i < count; i++ ) queue.dequeue();

    const endTime = Date.now();

    return ( endTime - startTime ) / 1000;
};

const QueueTest = () => {
    /*const queue = new ArrayQueue();
    for( let i=0; i<10; i++ ) {
        queue.enqueue(i);
        console.log( queue.toString() );
        if( i%3 == 2 ) {
            queue.dequeue();
            console.log( queue.toString() );
        }
    }*/

    /*const queue = new Queue(10);
    for( let i=0; i<10; i++ ) {
        queue.enqueue(i);
        console.log( queue.toString() );
        if( i%3 == 2 ) {
            queue.dequeue();
            console.log( queue.toString() );
        }
    }*/

    let opCount = 100000;

    const arrayQueue = new ArrayQueue();
    const time1 = testQueueTime(arrayQueue, opCount);
    console.log(`ArrayQueue, time: ${time1} s`);

    const LoopQueue = new Queue();
    const time2 = testQueueTime(LoopQueue, opCount);
    console.log(`LoopQueue, time: ${time2} s`);
};

function main() {
    // console.log( isValid('{[]}') );
    // console.log( isValid('([)]') );

    // ArrayTest();
    // StackTest();
    QueueTest();
}

main();