/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function(heights) { // Time : O(n * log(n)), Space : O(n)
    let expected = [...heights];
    heights.sort((a, b) => a - b);
    [heights, expected] = [expected, heights];
    return expected.reduce(
            (acc, currHeight, i) => 
            acc + (currHeight !== heights[i])
            , 0);
};