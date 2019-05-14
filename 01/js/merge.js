const TestHelper = require('./testHelper.js');
const Algorithm = require('./algorithm.js');

const n = 50000;
// const arr = TestHelper.generateRandomArray(n, 0, n);
const arr = TestHelper.generateNearlyOrderedArray(n, 10);
const arr2 = TestHelper.copyArray(arr);
const arr3 = TestHelper.copyArray(arr);

TestHelper.testSort('        merge sort', Algorithm.mergeSort, arr);
TestHelper.testSort('      2 merge sort', Algorithm.mergeSort2, arr2);
TestHelper.testSort('insertionSort sort', Algorithm.insertionSort, arr3);
