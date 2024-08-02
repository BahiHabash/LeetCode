/**
 * @param {number[]} nums
 * @return {number}
 */
const minSwaps = function(nums) {
    let minSwapss = Infinity;
    let onesInCurrWindow = 0;
    let total = nums.reduce((acc, num) => acc + (num === 1), 0);

    for (let i = 0; i < total; i++) {
        onesInCurrWindow += (nums[i] === 1);
    }

    for (let i = total; i < nums.length; i++) {
        onesInCurrWindow += (nums[i] === 1);
        onesInCurrWindow -= (nums[i - total] === 1);
        minSwapss = Math.min(total - onesInCurrWindow, minSwapss)
    }

    for (let i = 0; i < total; i++) {
        onesInCurrWindow += (nums[i] === 1);
        onesInCurrWindow -= (nums[nums.length - total + i] === 1);
        minSwapss = Math.min(total - onesInCurrWindow, minSwapss)
    }

    return minSwapss;
}