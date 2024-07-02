/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) { // Time : O(n + m), Space : O(n + m)
    const freqMap1 = new Map();
    for (const num of nums1)
        freqMap1.set(num, (freqMap1.get(num) ?? 0) + 1);

    const freqMap2 = new Map();
    for (const num of nums2)
        freqMap2.set(num, (freqMap2.get(num) ?? 0) + 1);

    const intersection = [];
    for (const num of freqMap1.keys()) {
        if (freqMap2.has(num))
            for (let i = 1; i <= Math.min(freqMap1.get(num), freqMap2.get(num)); i++) {
                intersection.push(num);
            }
    }

    return intersection;
};