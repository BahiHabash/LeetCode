/**
 * @param {string[]} strs
 * @return {number}
 */
const maximumValue = function(strs) { // time : O(n), space : O(1)
    return strs.reduce((acc, str) => Math.max(isNaN(str) ? str.length : +str, acc), -Infinity);
};