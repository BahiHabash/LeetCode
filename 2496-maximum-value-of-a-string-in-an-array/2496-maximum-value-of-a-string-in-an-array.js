/**
 * @param {string[]} strs
 * @return {number}
 */
const maximumValue = function(strs) { // time : O(n), space : O(1)
    let maxValue = -Infinity;

    for (const str of strs) {
        maxValue = Math.max(isNaN(str) ? str.length : +str, maxValue);
    }

    return maxValue;
};