/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {  // Time : O(n), Space : O(1), Two pointers
    let i = 0
      , left = 0
      , right = nums.length - 1;
    
    while (i <= right) {
        if (nums[i] === 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
        }
        else if (nums[i] === 2) {
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
            i--;
        }
        i++;
    }
};