/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxK = function(nums) { // time : O(n^2), space : O(1)
    let maxPositiveIntger = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) { 
            for (let j = 0; j < nums.length; j++) {
                if (nums[i] === -1 * nums[j])
                    maxPositiveIntger = Math.max(nums[i], maxPositiveIntger); 
            }
        }
    }

    return maxPositiveIntger;
};