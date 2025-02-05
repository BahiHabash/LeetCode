/**
 * @param {number[]} nums
 * @return {number}
 */
function maxAscendingSum(nums) {
    let maxSum = nums[0];
    let currSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] >= nums[i]) {
            maxSum = Math.max(currSum, maxSum);
            currSum = nums[i];
        } else {
            currSum += nums[i];
        }
    }

    maxSum = Math.max(currSum, maxSum);

    return maxSum;
}