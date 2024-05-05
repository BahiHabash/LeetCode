/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const getCommon = function(nums1, nums2) {
    const seen = new Set(nums1);

    for (const n of nums2) 
        if (seen.has(n))
            return n;
    
    return -1;
};