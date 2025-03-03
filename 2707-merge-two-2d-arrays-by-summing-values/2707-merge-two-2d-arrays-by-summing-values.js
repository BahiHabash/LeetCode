/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
function mergeArrays(nums1, nums2) {
    const idsToValue = new Map();

    let [i, j] = [0, 0];

    while ((i < nums1.length) && (j < nums2.length)) {
        if (nums1[i][0] < nums2[j][0]) {
            idsToValue.set(
                nums1[i][0]
                , (idsToValue.get(nums1[i][0]) ?? 0) + nums1[i][1]
            )
            i++;
        } else {
            idsToValue.set(
                nums2[j][0]
                , (idsToValue.get(nums2[j][0]) ?? 0) + nums2[j][1]
            )
            j++;
        }
    }

    while (i < nums1.length) {
        idsToValue.set(
            nums1[i][0]
            , (idsToValue.get(nums1[i][0]) ?? 0) + nums1[i][1]
        )
        i++;
    }

    while (j < nums2.length) {
        idsToValue.set(
            nums2[j][0]
            , (idsToValue.get(nums2[j][0]) ?? 0) + nums2[j][1]
        )
        j++;
    }

    return [...idsToValue.entries()].sort((a, b) => a[0] - b[0]);
}