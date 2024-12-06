/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
const maxCount = function(banned, n, maxSum) {
    const bannedNums = new Set(banned);

    let currSum = 0;
    let collectedNums = 0;

    for (let i = 1; i <= n; i++) {
        if (currSum + i > maxSum) {
            break;
        } 

        if (!bannedNums.has(i)) {
            currSum += i;
            collectedNums++;
        }
    }

    return collectedNums;
};