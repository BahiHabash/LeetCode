/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) { // Time : O(n), Space (n)
    const len = nums.length;
    k = len - (k % len);
    const numsOriginal = [...nums];
    for (let i = 0; i < nums.length; i++) {
        nums[i] = numsOriginal[k++ % len];
    }
};