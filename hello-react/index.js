function bubbleSort(arr) {
    var _a;
    var n = arr.length;
    var swapped;
    for (var i = 0; i < n - 1; i++) {
        swapped = false;
        // Last i elements are already sorted
        for (var j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
                swapped = true;
            }
        }
        // If no two elements were swapped in the inner loop, the array is sorted
        if (!swapped) {
            break;
        }
    }
    return arr;
}
// Example usage:
var numbers = [64, 34, 25, 12, 22, 11, 90];
var sortedNumbers = bubbleSort(numbers);
console.log('Sorted array:', sortedNumbers);
