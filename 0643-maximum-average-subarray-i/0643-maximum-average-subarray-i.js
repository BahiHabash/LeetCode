/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function(nums, k) { // Time : O(n), Space : O(1)
    let maxAvg
      , currSum = 0
      , left = 0
      , right = 0;
    
    while (right < k)
        currSum += nums[right++];
    
    maxAvg = currSum / k;
    
    while (right < nums.length) {
        currSum += nums[right++];     // expand the window
        currSum -= nums[left++];      // shrink the window
        maxAvg = Math.max(currSum / k, maxAvg);    // update max average so far
    }

    return maxAvg;
};