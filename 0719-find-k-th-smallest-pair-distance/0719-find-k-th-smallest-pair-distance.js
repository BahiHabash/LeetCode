/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const smallestDistancePair = function(nums, k) {
    const absoluteDifferences = new Array( 
        nums.reduce((acc, n) => Math.max(acc, n), 0) 
    ).fill(0);

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const currentAbsDiff = Math.abs(nums[j] - nums[i]);
            absoluteDifferences[currentAbsDiff]++;
        }
    }

    let n = 0;
    
    for (const [currentAbsDiff, times] of absoluteDifferences.entries()) {
        n += times;
        if (n >= k) return currentAbsDiff;
    }
};