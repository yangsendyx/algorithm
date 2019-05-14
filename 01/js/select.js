const TestHelper = require('./testHelper.js');
const Algorithm = require('./algorithm.js');

/*const a = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
Algorithm.selectionSort(a);
console.log(...a);

const b = [4.4, 3.3, 2.2, 1.1];
Algorithm.selectionSort(b);
console.log(...b);

const c = ["D", "C", "B", "A"];
Algorithm.selectionSort(c);
console.log(...c);

const d = [["D", 90], ["C", 100], ["B", 95], ["A", 95]];
Algorithm.selectionSort(d, (a, b) => a[1] != b[1] ? a[1] > b[1] : a[0] < b[0]);
console.log(d.map(item => `Student: ${item[0]} ${item[1]}`).join('\n'));*/

const n = 10000;
const arr = TestHelper.generateRandomArray(n, 0, n);
// Algorithm.selectionSort(arr);
// TestHelper.printArray(arr);
TestHelper.testSort('selection sort', Algorithm.selectionSort, arr);