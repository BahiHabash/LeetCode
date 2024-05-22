/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) { // Time : O(n), Space : O(1)
    for (const num of nums) {
        if (nums[Math.abs(num) - 1] < 0)
            return Math.abs(num);
        nums[Math.abs(num) - 1] *= -1;
    }
};