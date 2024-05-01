/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = function(nums) { // O(n ^ 2)
    return nums.map((n, i) => nextGreater(n, i, nums));
};

/**
* @param {number} n
* @param {number} index
* @param {number[]} nums
 */
const nextGreater = function(n, index, nums) {
    const len = nums.length; 
    for (let i = (index + 1) % len; i !== index; i = (i + 1) % len) {
        if (nums[i] > n)
            return nums[i];
    }
    return -1;
}