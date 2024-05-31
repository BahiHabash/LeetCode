/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) { // Time : O(n * log(n)), Space : O(n)
    const uniqueNums = [...new Set(nums)].sort((a, b) => a - b);
    
    let maxLen = 0;

    for (let i = 0; i < uniqueNums.length; i++) {
        let currLen = 1;
        while (((uniqueNums[i + 1] ?? Infinity) - uniqueNums[i]) === 1){
            i++, currLen++;
        }
        maxLen = Math.max(currLen, maxLen);
    }

    return maxLen;
};