/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function(nums) {  // Time : O(n), Space : O(1)
    let MaxLenOfNonEmptySubarrayContainingOnly1 = 0
      , numOfZeros = 0
      , left = 0
      , right = 0;

    while (right < nums.length) {
        // expand the window
        numOfZeros += nums[right++] === 0;    
        // shrink the window
        while (numOfZeros > 1) {              
            numOfZeros -= nums[left++] === 0; 
        }
        // update the maximum length of non-empty subarray containing only 1's in the resulting array.
        MaxLenOfNonEmptySubarrayContainingOnly1 = Math.max(right - left - 1, MaxLenOfNonEmptySubarrayContainingOnly1);
    }
      
    return MaxLenOfNonEmptySubarrayContainingOnly1;
};