/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function(nums, k) { // Time : O(n), Space : O(k)
    const seen = new Set();
    for (let left = 0, right = 0; right < nums.length; right++) {
        const currNum = nums[right];

        if (seen.has(currNum))
            return true;
        
        seen.add(currNum);

        if (seen.size > k) 
            seen.delete(nums[left++]);
    }

    return false;
};