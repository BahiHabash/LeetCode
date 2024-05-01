/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = function(nums) {
    const nextGreater = new Map();  // indexOfEl : nextGreaterOfEl
    const stack = [];

    for (const [i, n] of nums.entries()) {
        while (stack.length && nums[stack.at(-1)] < n) {
            nextGreater.set(stack.pop(), n);
        }
        stack.push(i);
    }

    for (const i of stack) {
        for (let j = (i + 1) % nums.length; j !== i; j = (j + 1) % nums.length) {
            if (nums[j] > nums[i]) {
                nextGreater.set(i, nums[j]);
                break;
            }
            else if (nextGreater.get(j) && nextGreater.get(j) > nums[i]) {
                nextGreater.set(i, nextGreater.get(j));
                break;
            }
        }
    }

    return nums.map((_, i) => nextGreater.get(i) ?? -1);
};
