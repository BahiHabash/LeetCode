/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const isPossibleDivide = function(nums, k) { // Time : O(n), Space : (n)
    const numOfGroups = nums.length / k;
    // if no-way to divide nums into equal subarrays' size
    if (numOfGroups !== Math.trunc(numOfGroups)) 
        return false;

    // creat map for nums {num : frequency}
    const numsFreq = new Map();
    for (const num of nums) 
        numsFreq.set(num, (numsFreq.get(num) ?? 0) + 1); 

    // sort the distinct numbers in ascending order to keep track the minimum number
    const minNums = [...numsFreq.keys()].sort((a, b) => a - b); 

    while (minNums.length) {
        const initNum = minNums[0]; // first number in the current consecutive-numbers set
        const initNumFreq = numsFreq.get(initNum); // initNum frequency

        for (let currNum = initNum; currNum < initNum + k; currNum++) {
            if (!numsFreq.has(currNum) || numsFreq.get(currNum) < initNumFreq)
                return false;
            
            numsFreq.set(currNum, numsFreq.get(currNum) - initNumFreq);

            if (numsFreq.get(currNum) === 0) {
                numsFreq.delete(currNum);
                minNums.shift();
            }
        }
    }

    return true;
};