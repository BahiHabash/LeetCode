/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) { // Time : O(n * log(n)) | Space : O(n)
    const map = new Map();
    nums.forEach((n, i) => map.set(n, i));
    return isExisted([...nums].sort((a, b) => a - b), target) ? map.get(target) : -1;
};

const isExisted = function(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) return true;
        else if (nums[mid] > target) r = mid -1;
        else l = mid + 1;
    }

    return false;
}