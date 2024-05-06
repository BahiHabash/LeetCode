/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (((nums[i - 1] ?? -Infinity) < nums[i]) && (nums[i] > (nums[i + 1] ?? -Infinity)))
            return i;
    }
};