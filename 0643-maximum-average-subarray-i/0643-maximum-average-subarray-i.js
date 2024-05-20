/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function(nums, k) { // Time : O(n), Space : O(1)
    let maxAvg = -Infinity
      , currSum = 0
      , left = 0
      , right = 0;
    
    while (right < nums.length) {
        currSum += nums[right++];            // expand the window

        if (right - left === k) {            // shrink the window
            maxAvg = Math.max(currSum / k, maxAvg);
            currSum -= nums[left++];
        }
    }

    return maxAvg;
};