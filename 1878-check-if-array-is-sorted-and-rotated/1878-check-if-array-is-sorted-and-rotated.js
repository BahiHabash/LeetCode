/**
 * @param {number[]} nums
 * @return {boolean}
 */
function check(nums) {
    let count = 0;

    for (let i = 1; i < nums.length; i++) {
        count += nums[i - 1] > nums[i];
    }

    if (count !== 1) return count === 0;

    return nums.at(0) >= nums.at(-1);
}