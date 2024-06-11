/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function(heights) { // Quick sort, Time : O(n^2), avg(n * log(n)), Space : O(n)
    const expected = quickSort(heights);
    return heights.reduce((acc, height, i) => acc + (height !== expected[i]), 0);
};

const quickSort = function(arr) {
    if (arr.length <= 1) // Base Case
        return arr;
    
    const pivot = arr[0];
    const lessThanPivot = [];
    const GreaterThanPivot = [];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot)
            lessThanPivot.push(arr[i]);
        else
            GreaterThanPivot.push(arr[i]);
    }

    return [...quickSort(lessThanPivot), pivot, ...quickSort(GreaterThanPivot)];
};