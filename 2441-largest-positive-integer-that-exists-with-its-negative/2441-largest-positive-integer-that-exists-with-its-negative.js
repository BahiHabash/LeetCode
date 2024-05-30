/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxK = function(nums) { // time : O(n * log(n)), space : O(1)
    nums.sort((a, b) => a - b);
    let left = 0, right = nums.length - 1;

    while(left < right) {
        if (nums[left] + nums[right] === 0)
            return nums[right];
        else if (Math.abs(nums[left]) < nums[right])
            right--;
        else 
            left++;
    }

    return -1;
};