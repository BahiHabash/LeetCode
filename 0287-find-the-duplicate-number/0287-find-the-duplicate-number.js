/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) { // Time : O(n * log(n)), Space : O(1)
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1])
            return nums[i];
    }
};