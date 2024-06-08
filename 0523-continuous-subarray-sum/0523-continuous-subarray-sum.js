/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySum = function(nums, k) { // Time : O(n * (sum / k)), space : O(n)
    const prefixSum = new Map([[0, -1]]);
    let sum = 0; 
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (! prefixSum.has(sum))
            prefixSum.set(sum, i);
    }

    let currSum = 0;
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        for (let j = currSum % k; j <= currSum; j += k) {
            if ((i - (prefixSum.get(j) ?? Infinity) >= 2)
             || (i - (prefixSum.get(currSum) ?? Infinity) >= 2))
                return true;
        }
    }

    return false;
};