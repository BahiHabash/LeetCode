/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) { // Time : O(n), Space : O(n)
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num))
            return num;
        seen.add(num);
    }
};