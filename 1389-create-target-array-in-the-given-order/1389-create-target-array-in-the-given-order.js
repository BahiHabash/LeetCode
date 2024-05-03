/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = function(nums, index) {
    const target = [];

    for (const [i, idx] of index.entries())
        target.splice(idx, 0, nums[i]);

    return target;
};