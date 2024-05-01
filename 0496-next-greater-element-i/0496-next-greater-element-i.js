/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function(nums1, nums2) { // O(nums1.length * nums2.length)
    return nums1.map(n => nextGreaterIn(nums2, n));
};

/**
* @param {number[]} nums
* @param {number} n
 */
const nextGreaterIn = function(nums, n) {
    for (let i = nums.indexOf(n) + 1; i < nums.length; i++) {
        if (nums[i] > n)
            return nums[i];
    }
    return -1;
}