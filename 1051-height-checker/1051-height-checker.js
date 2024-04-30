/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function(heights) { // Time O(n * log(n)) | Space : O(n)
    expectdOrder = [...heights].sort((a, b) => a - b);
    return heights.reduce((acc, height, i) => acc + (height !== expectdOrder[i]), 0);
};