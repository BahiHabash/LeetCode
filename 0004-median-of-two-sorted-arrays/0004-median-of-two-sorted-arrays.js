/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) { // Time : O(n), Space : O(1)
    const totalLen = nums1.length + nums2.length;
    let idx1 = 0, idx2 = 0;
    let mid1 = 0, mid2 = 0;

    for (let i = 0; i <= Math.floor(totalLen / 2); i++) {
        if ((nums1[idx1] ?? Infinity) < (nums2[idx2] ?? Infinity)) {
            mid2 = mid1;
            mid1 = nums1[idx1++];
        }
        else  {
            mid2 = mid1;
            mid1 = nums2[idx2++];
        }
    }

    if (totalLen % 2 === 1)
        return mid1;
    else 
        return (mid1 + mid2) / 2;

}   