/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const getCommon = function(nums1, nums2) { // Time : O(n * log(n)) | Space : O(1)
    for (const n of nums1)
        if (isExisted(nums2, n))
            return n;

    return -1;
};
// do binary search for element in an array
const isExisted = function (arr, n) {
    let l = 0
      , r = arr.length - 1;
    
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);

        if (arr[mid] === n)
            return true;
        if (arr[mid] > n)
            r = mid - 1;
        else
            l = mid + 1;
    }

    return false;
}














