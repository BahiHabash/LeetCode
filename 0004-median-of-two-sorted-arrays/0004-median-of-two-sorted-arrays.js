const findMedianSortedArrays = function(nums1, nums2) { // Time : O(n)
    let i = 0, j = 0, curr = 0, prev = 0;
    const totalLength = nums1.length + nums2.length;
    const mid = Math.floor(totalLength / 2);

    while (i + j <= mid) {
        prev = curr;
        if ((nums1[i] ?? Infinity) < (nums2[j] ?? Infinity)) {
            curr = nums1[i];
            i++;
        } 
        else {
            curr = nums2[j];
            j++;
        }
    }

    if (totalLength % 2 === 0)
        return (prev + curr) / 2;
    else
        return curr;
};
