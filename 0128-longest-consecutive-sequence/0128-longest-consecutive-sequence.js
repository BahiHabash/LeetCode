/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) { // Time : O(n), Space : O(n)
    const uniqueNums = new Set(nums);
    
    let maxLen = 0;

    for (const num of uniqueNums) {
        let currLen = 1;
         
        for (let n = num; uniqueNums.has(n + 1); n++) {
            uniqueNums.delete(n);
            currLen++;
        }

        for (let n = num; uniqueNums.has(n - 1); n--) {
            uniqueNums.delete(n);
            currLen++;
        }

        maxLen = Math.max(currLen, maxLen);
    }

    return maxLen;
};