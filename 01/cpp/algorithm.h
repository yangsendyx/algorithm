#ifndef CPP_ALGORITHM_H
#define CPP_ALGORITHM_H

#include <iostream>
using namespace std;

namespace Algorithm {
	template<typename T>
	void selectionSort(T arr[], int n) {
		for( int i=0; i<n; i++ ) {
			int minIndex = i;
			for( int j=i+1; j<n; j++ ) {
				if( arr[j] < arr[minIndex] ) minIndex = j;
			}

			swap( arr[i], arr[minIndex] );
		}
	}

	template<typename T>
	void insertionSort(T arr[], int n) {
		for( int i=1; i<n; i++ ) {
			T e = arr[i];
			int j;

			for( j=i; j>0 && arr[j-1] > e; j-- ) {
				arr[j] = arr[j-1];
			}
			arr[j] = e;
		}
	}

	template<typename T>
	void insertionSort(T arr[], int l, int r) {
		for( int i=l; i<=r; i++ ) {
			T e = arr[i];
			int j;

			for( j=i; j>0 && arr[j-1] > e; j-- ) {
				arr[j] = arr[j-1];
			}
			arr[j] = e;
		}
	}
	// TODO 冒泡排序优化
	template<typename T>
	void bubbleSort(T arr[], int n) {
		for( int i=0; i<n-1; i++ ) {
			for( int j=0; j<n-1-i; j++ ) {
				if( arr[j] > arr[j+1] ) {
					swap(arr[j], arr[j+1]);
				}
			}
		}
	}
	// TODO 实现希尔排序
	template<typename T>
	void shellSort(T arr[], int n) {}

	// 将arr[l...mid]和arr[mid+1...r]进行归并
	template<typename T>
	void __merge(T arr[], int l, int mid, int r) {
		T aux[r-l+1];
		for( int i=l; i<=r; i++ ) {
			aux[i-l] = arr[i];
		}

		int i = l, j = mid + 1;
		for( int k = l; k <= r; k++ ) {
			if( i > mid ) {
				arr[k] = aux[j-l];
				j++;
			} else if( j > r ) {
				arr[k] = aux[i-l];
				i++;
			} else if( aux[i-l] < aux[j-l] ) {
				arr[k] = aux[i-l];
				i++;
			} else {
				arr[k] = aux[j-l];
				j++;
			}
		}
	}
	// 递归使用归并排序，对arr[l...r]范围排序
	template<typename T>
	void __mergeSort(T arr[], int l, int r) {
		if( l >= r )
			return;

		int mid = ( l + r ) / 2;
		__mergeSort(arr, l, mid);
		__mergeSort(arr, mid+1, r);
		__merge(arr, l, mid, r);
	}

	// 递归使用归并排序，对arr[l...r]范围排序
	template<typename T>
	void __mergeSort2(T arr[], int l, int r) {
		if( r - l <= 15 ) {
			insertionSort(arr, l, r);
			return;
		}

		int mid = ( l + r ) / 2;
		__mergeSort(arr, l, mid);
		__mergeSort(arr, mid+1, r);

		if( arr[mid] > arr[mid+1] )
			__merge(arr, l, mid, r);
	}

	template<typename T>
	void mergeSort(T arr[], int n) {
		__mergeSort(arr, 0, n-1);
	}

	template<typename T>
	void mergeSort2(T arr[], int n) {
		__mergeSort2(arr, 0, n-1);
	}
}


#endif //CPP_ALGORITHM_H