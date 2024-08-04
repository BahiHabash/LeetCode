/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const rangeSum = function(nums, n, left, right) { // Time : O(n^2 + n*log(n)), space : O(n)
    const sumOfSubArrays = [...nums];

    for (let i = 0; i < nums.length; i++) {
        let currSubArraySum = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            currSubArraySum += nums[j];
            sumOfSubArrays.push(currSubArraySum);
        }
    }

    sumOfSubArrays.sort((a, b) => a - b);

    let result = 0;
    
    for (let i = left - 1; i < right; i++) {
        result += sumOfSubArrays[i];
    }

    return result % ((10**9) + 7);
};