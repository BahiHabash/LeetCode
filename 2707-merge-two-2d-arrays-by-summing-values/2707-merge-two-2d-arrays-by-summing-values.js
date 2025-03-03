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

    const res = [];

    for (let i = 1; i <= 1000; i++) {
        if (idsToValue.has(i)) {
            res.push([i, idsToValue.get(i)]);
        }
    }

    return res;
}