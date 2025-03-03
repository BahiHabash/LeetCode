/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
function mergeArrays(nums1, nums2) {
    const idsToValue = new Map();

    for (const [id, val] of nums1) {
        idsToValue.set(id, val);
    }

    for (const [id, val] of nums2) {
        idsToValue.set(id, (idsToValue.get(id) ?? 0) + val);
    }

    return [...idsToValue.entries()].sort((a, b) => a[0] - b[0]);
}