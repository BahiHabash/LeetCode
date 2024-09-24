/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
const longestCommonPrefix = function(arr1, arr2) {
    const prefixes = new Set();

    for (const item of arr1) {
        let prefix = '';
        for (const char of String(item)) {
            prefix += char;
            prefixes.add(prefix);
        }
    }

    let maxPrefixLength = 0;

    for (const item of arr2) {
        let prefix = '';
        for (const char of String(item)) {
            prefix += char;
            if (prefixes.has(prefix)) {
                maxPrefixLength = Math.max(prefix.length, maxPrefixLength);
            }
        }
    }

    return maxPrefixLength;
};