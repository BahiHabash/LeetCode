/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function(nums) {
    let maxNum = nums.reduce((acc, n) => Math.max(acc, n), -Infinity);

    let [i, j] = [0, 0];
    let maxLen = 1;

    while (j < nums.length) {
        while (nums[j] === maxNum) j++;
        maxLen = Math.max(j - i, maxLen);
        i = j + 1;
        j++;
    }

    return maxLen;
};
