/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function(nums, target) {
    return [getBoundry(nums, target, 'lowwer'), getBoundry(nums, target, 'upper')];
};

const getBoundry = function(nums, target, boundry) {
    function checkBoundry(boundry, i) {
        if (boundry === 'upper')
            return (nums[i + 1] ?? Infinity) !== target;
        else if (boundry === 'lowwer')
            return (nums[i - 1] ?? Infinity) !== target;
    }

    let l = 0, r = nums.length - 1;

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        
        if ((nums[mid] === target)){
            if (checkBoundry(boundry, mid))
                return mid;
            else 
                (boundry === 'upper') ? l = mid + 1 : r = mid - 1;
        }
        else if (nums[mid] > target) 
            r = mid - 1;
        else
            l = mid + 1;
    }

    return -1;
}