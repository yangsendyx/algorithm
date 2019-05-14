#include <iostream>
#include "testHelper.h"
#include "algorithm.h"

using namespace std;

int main() {
	int n = 10000;
	// int *arr = TestHelper::generateRandomArray(n, 0, n);
	int *arr = TestHelper::generateNearlyOrderedArray(n, 10);
	int *arr2 = TestHelper::copyIntArray(arr, n);

	TestHelper::testSort("insertion sort", Algorithm::insertionSort, arr, n);
	TestHelper::testSort("selection sort", Algorithm::selectionSort, arr2, n);

	delete[] arr;
	delete[] arr2;

	return 0;
}