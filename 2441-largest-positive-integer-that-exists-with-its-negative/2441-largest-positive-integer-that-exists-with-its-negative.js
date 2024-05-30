/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxK = function(nums) { // time : O(n^2), space : O(1)
    let maxPositiveIntger = -1;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === 0)
                maxPositiveIntger = Math.max(Math.abs(nums[i]), maxPositiveIntger); 
        }
    }

    return maxPositiveIntger;
};