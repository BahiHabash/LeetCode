/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = function(nums, k) { // Time : O(n), Space : O(1)
    
    let maxNumOfConsecutive1InArray = 0
      , currNumOfZeros = 0
      , left = 0
      , right = 0;

    while (right < nums.length) {
        currNumOfZeros += nums[right++] === 0;      // expand the window

        while (currNumOfZeros > k && left <= right) {
            currNumOfZeros -= nums[left++] === 0;   // shrink the window
        }

        maxNumOfConsecutive1InArray = Math.max((right - left), maxNumOfConsecutive1InArray) // update the maximum number of consecutive 1's in the array if you can flip at most k 0's so far
    }

    return maxNumOfConsecutive1InArray;
};