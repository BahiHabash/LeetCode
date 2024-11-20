/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumSubarraySum = function(nums, k) {
    let maxSum = 0;
    let currSum = 0;
    const window = new Map();

    for (let l = 0, r = 0; r < nums.length; r++) {
        currSum += nums[r];
        window.set(nums[r], (window.get(nums[r]) ?? 0) + 1);

        if ((r - l + 1) === k) {
            if (window.size === k) {
                maxSum = Math.max(currSum, maxSum);
            }

            currSum -= nums[l];
            
            const freq = window.get(nums[l]);
            if (freq === 1) {
                window.delete(nums[l])
            } else {
                window.set(nums[l], freq - 1);
            }

            l++; 
        }
    }

    return maxSum;
};
