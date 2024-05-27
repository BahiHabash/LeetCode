/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = function(nums) { // Time : O(1001), Space : O(numOfUnqueNums)
    const numsFreq = new Map();

    for (const num of nums)
        numsFreq.set(num, (numsFreq.get(num) || 0) + 1);

    let remaingNums = nums.length;

    for (let i = 0; i <= nums.length; i++) {
        if (i === remaingNums) return i;
        remaingNums -= (numsFreq.get(i) || 0);
    }

    return -1;
};