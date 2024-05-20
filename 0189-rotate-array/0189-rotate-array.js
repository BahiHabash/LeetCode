/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) { // Time : O(n), Space (n) 
    const len = nums.length;
    const map = new Map(nums.entries());
    k = len - (k % len);
    for (let i = 0; i < nums.length; i++) {
        nums[i] = map.get(k % len);
        k++;
    }
};