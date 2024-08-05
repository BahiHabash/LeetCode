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

    const kthDistinctString = Object.entries(charFreq)
    .filter(([char, freq]) => freq === 1)
    .at(k - 1)?.at(0);
    
    return kthDistinctString ?? '';
};