/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i: number = nums1.length - 1;
    while (nums1[i] === 0) {
        i--;
    }

    const mergedArr: number[] = [...nums1.slice(0, i + 1), ...nums2];

    mergedArr.sort((a, b) => a - b);

    for (let i = 0; i < mergedArr.length; i++) {
        nums1[i] = mergedArr[i];
    }
};