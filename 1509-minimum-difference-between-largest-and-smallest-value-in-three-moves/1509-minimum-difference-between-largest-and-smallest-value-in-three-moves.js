/**
 * @param {number[]} nums
 * @return {number}
 */
const minDifference = function(nums) {
    if (nums.length <= 3) return 0;
    
    nums.sort((a, b) => a - b);

    // all four possible  scenarios 
    return Math.min(
                    nums.at(-1) - nums.at(3),
                    nums.at(-2) - nums.at(2),
                    nums.at(-4) - nums.at(0),
                    nums.at(-3) - nums.at(1)
                );
};