/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = function(nums) { // Time : O(1001), Space : O(1001)
    const len = nums.length;
    const arr = new Array(1001).fill(0);

    for (const num of nums)
        arr[num] += 1;

    let remaingNums = len;
    for (const [i, times] of arr.entries()) {
        if (remaingNums === i) return i;
        remaingNums -= times;
    }

    return -1;
};