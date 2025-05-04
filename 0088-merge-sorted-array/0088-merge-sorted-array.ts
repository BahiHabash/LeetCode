/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i: number = nums1.length - 1;
    while (nums1[i] === 0) {
        i--;
    }

    for (let j = 0; j < nums2.length; j++) {
        nums1[++i] = nums2[j];
    }

    nums1.sort((a, b) => a - b);
};