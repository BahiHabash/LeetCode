/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) { // Time : O(n) , Space : O(n)
    const numsMap = new Map();

    for (const n of nums)
        numsMap.set(n, (numsMap.get(n) || 0) + 1);
    
    return [...numsMap.entries()].find(([num, times]) => times === 1)[0];
};