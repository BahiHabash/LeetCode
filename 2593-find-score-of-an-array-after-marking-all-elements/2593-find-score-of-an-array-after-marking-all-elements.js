/**
 * @param {number[]} nums
 * @return {number}
 */
const findScore = function(nums) {
    let score = 0;
    const valueIndex = nums.map((item, i) => [item, i]); // [[item, index]]
    const marked = new Set(); // (indices)
    
    // sort based on values ascending
    valueIndex.sort((a, b) => a[0] - b[0]);

    for (const [val, idx] of valueIndex) {
        // skip marked indices
        if (marked.has(idx)) continue;

        // mark minimum available item and update the score
        marked.add(idx);
        score += val;

        // mark the left item if existed
        if (idx > 0) {
            marked.add(idx - 1);
        }

        // mark the right item if existed
        if (idx < nums.length - 1) {
            marked.add(idx + 1);
        }
    }

    return score;
};
