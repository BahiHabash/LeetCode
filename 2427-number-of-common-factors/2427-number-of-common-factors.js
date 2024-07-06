/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const commonFactors = function(a, b) { // Time : O(n), Space : O(1)
    let numOfCommonFactors = 0;

    for (let i = Math.max(a, b); i >= 1; i--) {
        numOfCommonFactors += (a % i === 0) && (b % i === 0);
    }

    return numOfCommonFactors;
};