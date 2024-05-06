/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function(nums) {
    let l = 0, r = nums.length - 1;
    let mid;

    while (l <= r) {
        mid = Math.floor((l + r) / 2);

        if (((nums[mid - 1] ?? -Infinity) < nums[mid]) && (nums[mid] > (nums[mid + 1] ?? -Infinity)))
            return mid;
        else if ((nums[mid - 1] ?? -Infinity) < nums[mid])
            l = mid + 1;
        else 
            r = mid - 1;
    }
        
    return mid;
};