/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = function(nums) { // Time : O((n * log(n)) + (maxNumIn(nums) + nums.lnegth)), Space : O(1)
    nums.sort((a, b) => a - b);
    let idx = 0;
    for(let i = 0; i <= nums.length; i++) {
        while (i > nums[idx]) idx++;
        if (nums.length - idx === i) return i;
    }
    return -1;
};