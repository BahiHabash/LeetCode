/**
 * @param {number[]} nums
 * @return {boolean}
 */
function check(nums) {
    let pivot = 0;

    for (let i = 0; i < nums.length; i++) {
        if ((nums[i - 1] ?? -Infinity) > nums[i]) {
            pivot = i;
            break;
        }
    }

    const original = [...nums.slice(pivot), ...nums.slice(0, pivot)];

    for (let i = 1; i < original.length; i++) {
        if (original[i - 1] > original[i]) {
            return false;
        }
    } 

    return true;
}