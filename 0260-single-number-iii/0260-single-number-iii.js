/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = function(nums) { // Time : O(n), Space : O(n)
    const numsFreq = new Map();
    for (const n of nums)
        numsFreq.set(n, (numsFreq.get(n) || 0) + 1);

    const elemsAppearOnce = [];
    for (const [key, times] of numsFreq)
        if (times === 1)
            elemsAppearOnce.push(key);

    return elemsAppearOnce;
};