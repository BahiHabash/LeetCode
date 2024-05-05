/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const getCommon = function(nums1, nums2) { // Time : O(n) | Space : O(1)
    let i = 0
      , j = 0;
    
    while (inBoundries()) {
        while (inBoundries() && nums1[i] > nums2[j]) 
            j++;

        if (nums1[i] === nums2[j])
            return nums1[i];

        i++;
    }

    function inBoundries(){
        return (i < nums1.length) && (j < nums2.length);
    }

    return -1;
};














