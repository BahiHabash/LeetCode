/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = function(nums) {
    const len = nums.length;
    const nextGreater = new Array(len).fill(-1);
    const stack = [];

    for (let i = 0; i < len * 2; i++) {
        const idx = i % len;

        while (stack.length && nums[stack.at(-1)] < nums[idx])
            nextGreater[stack.pop()] = nums[idx];
            
        stack.push(idx);
    }

    return nextGreater;
};
