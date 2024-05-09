/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
const maximumHappinessSum = function(happiness, k) {
    let maxSum = 0;
    happiness.sort((a, b) => b - a);
    
    for(let i = 0; i < k; i++) {
        maxSum += Math.max((happiness[i] - i), 0);
    }

    return maxSum;
};