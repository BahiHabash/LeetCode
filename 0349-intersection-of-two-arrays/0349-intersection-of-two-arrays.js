/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) { // Time : O(n + m), Space : O(n)
    const intersectionNums = [];
    const seen = new Map();

    for (const n of nums1)
        seen.set(n, 1);
    
    for (const n of nums2) {
        if (seen.get(n) === 1) {
            intersectionNums.push(n);
            seen.delete(n);
        }
    }
            
    return intersectionNums;
};