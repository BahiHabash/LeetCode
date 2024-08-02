/**
 * @param {number[]} nums
 * @return {number}
 */
const minSwaps = function(nums) { // Time : O(n), Space : O(1)
    const len = nums.length;
    const windowSize = nums.reduce((acc, num) => acc + (num === 1), 0); // window size is the number of ones in the nums array
    let zerosInCurrWindow = 0;
    let minSwapsToGroupOnes = windowSize;

    for (let i = 0; i < len + windowSize; i++) {
        zerosInCurrWindow += (nums.at(i % len) === 0); // expand the window
        
        if (i >= windowSize) {
            zerosInCurrWindow -= (nums.at(i - windowSize) === 0); // shrink the window
            minSwapsToGroupOnes = Math.min(zerosInCurrWindow, minSwapsToGroupOnes);
        }
    }

    return minSwapsToGroupOnes;
}