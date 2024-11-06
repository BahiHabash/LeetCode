/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canSortArray = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] <= nums[j + 1]) {
                continue;
            } else {
                if ( countSetBits(nums[j]) === countSetBits(nums[j + 1]) ) {
                    [nums[j], nums[j + 1]] = [nums[j+1], nums[j]];
                } else {
                    return false;
                }
            }
        }
    }

    return true;
};

// Helper function to count set bits
const countSetBits = function(n) {
    return [...n.toString(2)].reduce((acc, digit) => acc + (digit === '1'), 0);
};