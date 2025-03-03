/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
function pivotArray(nums, pivot) {
    const equalPivot = [];
    const lessThanPivot = [];
    const greaterThanPivot = [];

    for (const num of nums) {
        if (num < pivot) {
            lessThanPivot.push(num);
        } else if (num > pivot) {
            greaterThanPivot.push(num);
        } else {
            equalPivot.push(num);
        }
    }

    return [...lessThanPivot, ...equalPivot, ...greaterThanPivot];
}