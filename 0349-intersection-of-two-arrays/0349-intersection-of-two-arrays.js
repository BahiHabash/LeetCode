/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) { // Time : O(n + m), Space : O(n + m)
    const seen = new Set(nums1);
    const intersection = new Set();

    for (const n of nums2)
        if (seen.has(n) && !intersection.has(n))
            intersection.add(n);
            
    return Array.from(intersection);
};