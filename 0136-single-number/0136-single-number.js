/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) { // Time : O(n * log(n)) , Space : O(1)
    return nums.reduce((acc, num) => acc ^ num, 0);
};