/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxK = function(nums) {
    let res = -1;
    for (let i = 0; i < nums.length; i++) {
        if (Math.max(nums[i], nums[i] * -1) > res){
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] * -1 === nums[i]){
                    res = Math.max(nums[i], nums[j]);
                    break;
                }
            }
        }
    }

    return res;
};