/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) { // Time : O(n * log(n)) , Space : O(1)
    const uniqueNums = [...new Set(nums)]
    
    const summition = nums.reduce((acc, n) => acc + n, 0);
    const desiredSummition = uniqueNums.reduce((acc, n) => acc + n, 0) * 2;
    
    return desiredSummition - summition;
};