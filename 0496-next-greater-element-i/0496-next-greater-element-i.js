/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function(nums1, nums2) { // O(nums1.length + nums2.length)
    const nextGreater = new Map();
    const stack = [];

    for (const n of nums2) {
        while (stack.length && stack.at(-1) < n)
            nextGreater.set(stack.pop(), n);
        stack.push(n);
    }

    return nums1.map(n => nextGreater.get(n) || -1);
};