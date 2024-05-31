/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) { // Time : O(n), Space : O(n)
    const uniqueNums = new Set(nums);
    return uniqueNums.size !== nums.length;
};