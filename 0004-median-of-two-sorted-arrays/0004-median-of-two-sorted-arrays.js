/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) { // Time : O(n), Space : O(1)
    const arr = [];
    for (let i = 0, j = 0; i < nums1.length || j < nums2.length;) {
        if ((nums1[i] ?? Infinity) < (nums2[j] ?? Infinity))
            arr.push(nums1[i++]);
        else 
            arr.push(nums2[j++]);
    }
    const len = arr.length;
    if (len % 2 === 0)
        return (arr[len / 2] + arr[(len / 2) - 1]) / 2;
    else 
        return arr[Math.floor(len / 2)];
}   