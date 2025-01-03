/**
 * @param {number[]} nums
 * @return {number}
 */
const waysToSplitArray = function(nums) {
    const totalSum = nums.reduce((acc, n) => acc + n, 0);
    let [leftSum, validSplits] = [0, 0];

    for (let i = 0; i < nums.length - 1; i++) {
        leftSum += nums[i];
        validSplits += (leftSum >= (totalSum - leftSum));
    }

    return validSplits;
};