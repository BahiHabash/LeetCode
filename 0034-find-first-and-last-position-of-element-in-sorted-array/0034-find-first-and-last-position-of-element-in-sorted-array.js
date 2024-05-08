/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function(nums, target) {
    return [lowwerBoundry(nums, target), upperBoundry(nums, target)];
};

const lowwerBoundry = function(nums, target) {
    let idx = -1, l = 0, r = nums.length - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) idx = mid;
        if (nums[mid] >= target) r = mid - 1;
        else l = mid + 1;
    }
    return idx;
};

const upperBoundry = function(nums, target) {
    let idx = -1, l = 0, r = nums.length - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) idx = mid;
        if (nums[mid] <= target) l = mid + 1;
        else r = mid - 1;
    }
    return idx;
};