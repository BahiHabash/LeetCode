/**
 * @param {number[]} nums
 * @return {number}
 */
const findValueOfPartition = function(nums) { // Time : O(n * log(n)) 
    nums.sort((a, b) => a - b);
    let minDiff = Infinity;
    
    for (let i = 1; i < nums.length; i++)
        minDiff = Math.min(minDiff, Math.abs(nums[i] - nums[i - 1]));
    
    return minDiff;
};