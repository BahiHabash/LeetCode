/**
 * @param {number[]} nums
 * @return {number}
 */
const findNonMinOrMax = function(nums) {
    if (nums.length <= 2)
        return -1;
    
    return ([...nums].sort((a, b) => a - b))[1];
};