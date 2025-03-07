/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const idxToNum = new Map(nums.entries());

    k = k % (nums.length);
    let idx = nums.length - k;

    for (let i = 0; i < nums.length; i++) {
        // get element
        nums[i] = idxToNum.get( (idx % nums.length) );

        // update idx
        idx++;
    }

    return nums;
};