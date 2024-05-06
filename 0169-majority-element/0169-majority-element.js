/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    const arr = [...nums].sort((a, b) => a - b);
    return arr[Math.floor(nums.length / 2)];
};