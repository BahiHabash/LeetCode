/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const seen = new Map();
    for (const [i, num] of nums.entries()) {
        if (seen.has(target - num)) {
            return [seen.get(target - num), i];
        }
        seen.set(num, i);
    }
};