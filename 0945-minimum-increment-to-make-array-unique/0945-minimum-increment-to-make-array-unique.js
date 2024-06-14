/**
 * @param {number[]} nums
 * @return {number}
 */
const minIncrementForUnique = function(nums) { // Time : O(n*log(n)) , Space : O(n)
    nums.sort((a, b) => a - b);
    let maxNum = nums[0];
    let minMoves = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] >= nums[i]) {
            minMoves += maxNum - nums[i] + 1;
            nums[i] = maxNum + 1;
        }
        maxNum = nums[i];
    }

    return minMoves;
};
