/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxK = function(nums) { // time : O(n), space : O(n)
    let maxPositiveIntger = -1;
    const negatives = new Set(nums.filter(n => n < 0));

    for (let i = 0; i < nums.length; i++) {
        if (negatives.has(-1 * nums[i]))
            maxPositiveIntger = Math.max(nums[i], maxPositiveIntger);
    }

    return maxPositiveIntger;
};