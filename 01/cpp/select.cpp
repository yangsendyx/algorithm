#include <iostream>
#include "select.h"
#include "testHelper.h"
#include "algorithm.h"

using namespace std;

int main() {
	/*int a[10] = { 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 };
	Algorithm::selectionSort(a, 10);
	for( int i=0; i<10; i++ )
		cout << a[i] << " ";
	cout << endl;

	float b[4] = { 4.4, 3.3, 2.2, 1.1 };
	Algorithm::selectionSort(b, 4);
	for( int i=0; i<4; i++ )
		cout << b[i] << " ";
	cout << endl;

	string c[4] = { "D", "C", "B", "A" };
	Algorithm::selectionSort(c, 4);
	for( int i=0; i<4; i++ )
		cout << c[i] << " ";
	cout << endl;

	Student d[4] = { {"D", 90}, {"C", 100}, {"B", 95}, {"A", 95} };
	Algorithm::selectionSort(d, 4);
	for( int i=0; i<4; i++ )
		cout << d[i];
	cout << endl;*/

	int n = 10000;
	int *arr = TestHelper::generateRandomArray(n, 0, n);
	// Algorithm::selectionSort(arr, n);
	// TestHelper::printArray(arr, n);

	TestHelper::testSort("selection sort", Algorithm::selectionSort, arr, n);
	delete[] arr;

	return 0;
}