const Logger = require('log4js').getLogger();
const { swap } = require('./algorithm.js');

exports.generateRandomArray = (n, min, max) => {
	if( min > max ) return Logger.error(`${min}大于${max}，越界了`);

	const arr = [];
	for( let i=0; i<n; i++ ) {
		arr[i] = Math.floor(Math.random()*(max - min + 1)) + min;
	}

	return arr;
};

exports.generateNearlyOrderedArray = (n, swapTimes) => {
	const arr = [];
	for( let i=0; i<n; i++ ) {
		arr[i] = i;
	}

	for( let i=0; i<swapTimes; i++ ) {
		const x = Math.floor(Math.random()*(n - 1));
		const y = Math.floor(Math.random()*(n - 1));
		swap(arr, x, y);
	}

	return arr;
};

exports.printArray = arr => {
	console.log(arr.join(' '));
};

const isSorted = arr => {
	const n = arr.length;
	for( let i=0; i<n-1; i++ ) {
		if( arr[i] > arr[i+1] ) {
			return false;
		}
	}
	return true;
};

exports.testSort = (sortName, fn, arr, compare) => {
	const startTime = Date.now();
	fn(arr, compare);
	const endTime = Date.now();

	if( !isSorted(arr) ) return Logger.error('排序失败');
	console.log(`${sortName}: ${(endTime-startTime)/1000} 秒`);
};

exports.copyArray = (arr) => {
	return [...arr];
};