/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) { // Time : O(n) | Space : O(n)
    const numIndexMap = new Map();

    for (const [i, num] of numbers.entries())
        if (numIndexMap.has(target - num))
            return [numIndexMap.get(target - num) + 1, i + 1];
        else 
            numIndexMap.set(num, i);
};
