/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums.sort((a, b) => a - b);

    let l = 0
      , r = nums.length - 1;
    
    while (l < r) {
        if (nums[l] * -1 > nums[r])
            while (nums[l] * -1 > nums[r])
                l++;

        if (nums[l] * -1 === nums[r])
            return nums[r];
            
        r--;
    }

    return -1;
};