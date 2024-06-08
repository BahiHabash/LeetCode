/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySum = function(nums, k) { // Time : O(n), space : O(n)
    const prefixSum = new Map([[0, -1]]);
    let sum = 0; 
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (! prefixSum.has(sum % k))
            prefixSum.set(sum % k, i);
    }

    let currSum = 0;
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        if (i - (prefixSum.get(currSum % k) ?? Infinity) >= 2)
            return true;
    }

    return false;
};