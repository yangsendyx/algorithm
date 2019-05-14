const swap = (arr, index1, index2) => {
	const temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
};
exports.swap = swap;

exports.selectionSort = (arr, compare) => {
	const len = arr.length;
	// 循环数组
	for( let i=0; i<len; i++ ) {
		let min = i;
		// 自当前项+1始，从剩余中找到最小值并把索引赋值 min
		for( let j=i+1; j<len; j++ ) {
			const isLess = compare ? compare(arr[j], arr[min]) : arr[j] < arr[min];
			if( isLess ) min = j;
		}

		swap(arr, i, min);
	}
};

exports.insertionSort = (arr, compare) => {
	const len = arr.length;
	// 循环数组
	for( let i=1; i<len; i++ ) {
		// 自当前项始，与前面所有进行比较，小于则进行置换
		const e = arr[i]; // 创建需要进行比较值的副本
		let j;

		for( j=i; j>0; j-- ) {
			// 如果前一个值大于被比较值，则将前一个值后移
			const isLess = compare ? compare(arr[j-1], e) : arr[j-1] > e;
			if( !isLess ) break;
			arr[j] = arr[j-1];
		}
		// 最后一次 j-- 后等于0，不满足循环，此时 j=0
		arr[j] = e;
	}
};
// TODO 冒泡排序优化
exports.bubbleSort = (arr, compare) => {
	const len = arr.length;

	for( let i=0; i<len-1; i++ ) {
		for( let j=0; j<len-1-i; j++ ) {
			if( arr[j] > arr[j+1] ) {
				swap(arr, j, j+1);
			}
		}
	}
};
// TODO 实现希尔排序
exports.shellSort = (arr, compare) => {
	const len = arr.length;
	let d = len;

	while( true ) {
		d = Math.floor(d/2);
		for( x = 0; x < d; x++ ) {
			for( i = x+d; i < len; i += d ) {
				const e = arr[i];
				let j;

				for( j = i-d; j >= 0 && a[j] > e; j -= d ) {
					const isLess = compare ? compare(arr[j], e) : arr[j] > e;
					if( !isLess ) break;
					arr[j+d] = arr[j];
				}
				arr[j+d] = e;
			}
		}

		if( d === 1 ) break;
	}
};


const __merge = (arr, l, mid, r, compare) => {
	const aux = [];
	for( let i=l; i<=r; i++ ) aux[i-l] = arr[i];

	let i = l;
	let j = mid + 1;
	const fn = (a, b) => compare ? compare(a, b) : a < b;

	for( k = l; k <= r; k++ ) {
		if( i > mid ) {
			arr[k] = aux[j-l];
			j++;
		} else if( j > r ) {
			arr[k] = aux[i-l];
			i++;
		} else if( fn(aux[i-l], aux[j-l]) ) {
			arr[k] = aux[i-l];
			i++;
		} else {
			arr[k] = aux[j-l];
			j++;
		}
	}
};

const __mergeSort = (arr, l, r, compare) => {
	if( l >= r ) return;

	const mid = Math.floor(( l + r ) / 2);
	__mergeSort(arr, l, mid);
	__mergeSort(arr, mid+1, r);
	__merge(arr, l, mid, r, compare);
};

const insertionSort = (arr, l, r, compare) => {
	const len = arr.length;
	// 循环数组
	for( let i=l; i<=r; i++ ) {
		// 自当前项始，与前面所有进行比较，小于则进行置换
		const e = arr[i]; // 创建需要进行比较值的副本
		let j;

		for( j=i; j>0; j-- ) {
			// 如果前一个值大于被比较值，则将前一个值后移
			const isLess = compare ? compare(arr[j-1], e) : arr[j-1] > e;
			if( !isLess ) break;
			arr[j] = arr[j-1];
		}
		// 最后一次 j-- 后等于0，不满足循环，此时 j=0
		arr[j] = e;
	}
};

const __mergeSort2 = (arr, l, r, compare) => {
	if( r - l <= 15 ) {
		insertionSort(arr, l, r, compare);
		return;
	}

	const mid = Math.floor(( l + r ) / 2);
	__mergeSort(arr, l, mid);
	__mergeSort(arr, mid+1, r);

	if( arr[mid] > arr[mid+1] ) __merge(arr, l, mid, r, compare);
};

exports.mergeSort = (arr, compare) => {
	const len = arr.length;
	__mergeSort(arr, 0, len-1, compare);
};

exports.mergeSort2 = (arr, compare) => {
	const len = arr.length;
	__mergeSort2(arr, 0, len-1, compare);
};