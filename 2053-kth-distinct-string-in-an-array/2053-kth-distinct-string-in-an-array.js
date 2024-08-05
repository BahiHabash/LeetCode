/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
const kthDistinct = function(arr, k) {
    const charFreq = {};

    for (const str of arr) {
        charFreq[str] ??= 0;
        charFreq[str]++;
    }

    let n = 0;

    for (const str of arr) {
        if (charFreq[str] === 1) n++;
        if (n === k) return str;
    }

    return '';
};