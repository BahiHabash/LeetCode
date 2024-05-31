/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) { // Time : O(n), Space : O(n)
    const seen = new Map();

    for (const n of nums) {
        if (seen.has(n))
            return true;
        seen.set(n, 1);
    }

    return false;
};