/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function xorAllNums(nums1, nums2) {
    let [xor1, xor2] = [0, 0];

    if (nums1.length % 2 === 1) {
        xor2 = nums2.reduce((acc, n) => acc ^ n, 0);
    }

    if (nums2.length % 2 === 1) {
        xor1 = nums1.reduce((acc, n) => acc ^ n, 0);
    }

    return xor1 ^ xor2;
}