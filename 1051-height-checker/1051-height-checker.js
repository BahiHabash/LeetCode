/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function(heights) { // Insertion sort, Time : O(n^2), Space : O(n)
    const expected = [];

    for (const height of heights) {
        let idx = expected.length;
        
        while (expected[idx - 1] > height)
            expected[idx] = expected[--idx];
            
        expected[idx] = height;
    }

    return heights.reduce((acc, height, i) => acc + (height !== expected[i]), 0);
};
