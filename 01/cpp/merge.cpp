#include <iostream>
#include "testHelper.h"
#include "algorithm.h"

using namespace std;

int main() {
	int n = 50000;
	// int *arr = TestHelper::generateRandomArray(n, 0, n);
	int *arr = TestHelper::generateNearlyOrderedArray(n, 10);
	int *arr2 = TestHelper::copyIntArray(arr, n);
	int *arr3 = TestHelper::copyIntArray(arr, n);

	TestHelper::testSort("        merge sort", Algorithm::mergeSort, arr, n);
	TestHelper::testSort("      2 merge sort", Algorithm::mergeSort2, arr2, n);
	TestHelper::testSort("insertionSort sort", Algorithm::insertionSort, arr3, n);

	delete[] arr;
	delete[] arr2;
	delete[] arr3;

	return 0;
}