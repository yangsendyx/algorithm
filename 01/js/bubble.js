const TestHelper = require('./testHelper.js');
const Algorithm = require('./algorithm.js');

const n = 10000;
const arr = TestHelper.generateRandomArray(n, 0, n);
// const arr = TestHelper.generateNearlyOrderedArray(n, 10);
const arr2 = TestHelper.copyArray(arr);
const arr3 = TestHelper.copyArray(arr);

TestHelper.testSort('   bubble sort', Algorithm.bubbleSort, arr);
TestHelper.testSort('insertion sort', Algorithm.insertionSort, arr2);
TestHelper.testSort('selection sort', Algorithm.selectionSort, arr3);
