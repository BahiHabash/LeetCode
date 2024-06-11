/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function(heights) { // Bubble sort, Time : O(n^2), Space : O(n)
    const expected = [...heights];

    for (let i = 0; i < expected.length; i++) {
        let sorted = true;
        
        for (let j = 0; j < expected.length - i - 1; j++) {
            if (expected[j] > expected[j + 1]) {
                [expected[j], expected[j + 1]] = [expected[j + 1], expected[j]];
                sorted = false;
            }
        }
        
        if (i === 0 && sorted)
            return 0;
    }

    return heights.reduce((acc, height, i) => acc + (height !== expected[i]), 0);
};