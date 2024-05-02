/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxK = function(nums) { 
    const negativeNums = new Set();
    nums.forEach(num => num < 0 ? negativeNums.add(num) : true);
    return nums.reduce((acc, num) => (num > acc && negativeNums.has(num * -1)) ? num : acc, -1);
};