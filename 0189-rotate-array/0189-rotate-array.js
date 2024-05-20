/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) { // Time : O(n), Space (1)   
    const len = nums.length;
    k %= len;
    
    if (k === 0)
        return;
    
    let pivot = len - k;
    reverse(nums, 0, pivot - 1);
    reverse(nums, pivot, len - 1);
    reverse(nums, 0, len - 1); // Reverses the entire array
};

/**
 * Reverses the elements in the given array within the specified range.
 * If no range is provided, the entire array is reversed.
 * @param {number[]} nums - The array to reverse.
 * @param {number} [left=0] - The starting index of the range to reverse.
 * @param {number} [right=nums.length - 1] - The ending index of the range to reverse.
 * @returns {number[]} The array after the reversal operation.
 */
const reverse = function(nums, left = 0, right = nums.length - 1) {
    if (!nums || left > right || right >= nums.length)   
        return nums;
    
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++, right--;
    }

    return nums;
};
