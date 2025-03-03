/**
 * @param {number[]} nums
 * @return {number[]}
 */
function applyOperations(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }

    // get non-zero elements in the begining of the result array
    let res = nums.filter(num => num !== 0);

    // add all remaing zeroes to the end of result array
    for (let i = res.length; i < nums.length; i++) {
        res.push(0)
    }

    return res;
}