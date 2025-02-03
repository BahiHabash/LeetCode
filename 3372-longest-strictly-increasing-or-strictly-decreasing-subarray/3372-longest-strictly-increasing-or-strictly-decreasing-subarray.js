/**
 * @param {number[]} nums
 * @return {number}
 */
function longestMonotonicSubarray(nums) {
    if (nums.length === 0) return 0;

    let maxLen = 1;
    let incLen = 1; // Length of the current increasing subarray
    let decLen = 1; // Length of the current decreasing subarray

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            incLen++;
            decLen = 1; // Reset decreasing length
        } else if (nums[i] < nums[i - 1]) {
            decLen++;
            incLen = 1; // Reset increasing length
        } else {
            // If nums[i] == nums[i - 1], reset both lengths
            incLen = 1;
            decLen = 1;
        }
        // Update maxLen with the maximum of the current increasing or decreasing lengths
        maxLen = Math.max(maxLen, incLen, decLen);
    }

    return maxLen;
}