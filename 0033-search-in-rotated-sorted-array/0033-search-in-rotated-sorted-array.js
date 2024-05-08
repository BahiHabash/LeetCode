/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) { // Time : O(n) | Space : O(1)
    for (const [i, num] of nums.entries()) {
        if (num === target)
            return i;
    }
    return -1;
};
