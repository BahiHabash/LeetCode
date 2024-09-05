/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
const missingRolls = function(rolls, mean, n) {
    const m = rolls.length;
    const sumOfObservedRolls = rolls.reduce((acc, n) => acc + n, 0);
    let targetSum = (mean * (m + n) - sumOfObservedRolls);

    // if no way to get obeservations with length n
    if (targetSum < n || targetSum > n * 6) {
        return [];
    }

    const arr = new Array(n).fill(1);
    
    targetSum -= n;
    let i = 0;
    while (targetSum--) {
        arr[++i % n]++;
    }

    return arr;
};