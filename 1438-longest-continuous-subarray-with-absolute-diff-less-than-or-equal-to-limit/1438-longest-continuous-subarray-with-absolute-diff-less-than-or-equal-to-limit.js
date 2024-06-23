/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
const longestSubarray = function(nums, limit) { // Time : O(n ^ 2 * log(n)), Space : O(n)

    let maxLen = 1
      , min = nums[0]
      , max = nums[0]
      , currSubArr;
    
    for (let left = 0, right = 0; right < nums.length; right++) {
        min = Math.min(nums[right], min);
        max = Math.max(nums[right], max);

        while ((max - min > limit) && (right - left + 1 > maxLen)) {
            left++;
            currSubArr = nums.slice(left, right + 1);
            currSubArr.sort((a, b) => a - b);
            min = currSubArr.at(0);
            max = currSubArr.at(-1);
        }

        maxLen = Math.max(right - left + 1, maxLen);
    }    

    return maxLen;
};