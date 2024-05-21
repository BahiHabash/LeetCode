/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function(nums, k) { // Time : O(n ^ 2), Space : O(1)
    for (let i=0; i <= nums.length; i++) {
        for (let j=i+1; j <= i+k && j < nums.length; j++) {
            if (nums[i] === nums[j])
                return true;
        }
    }
    return false;
};