/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) { // Time : O(n * log(n)) , Space : O(1)
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 1; i += 2) {
        if (nums[i] !== nums[i + 1])
            return nums[i];
    }
    
    return nums.at(-1)
};