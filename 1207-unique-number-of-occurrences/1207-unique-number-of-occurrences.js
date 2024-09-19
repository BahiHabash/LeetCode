/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function(arr) {
    const numsFreq = new Array(2001).fill(0);
    for (const n of arr) {
        numsFreq[n + 1000]++;
    }

    const numsOccurrenceFreq = new Array(arr.length);
    for (const freq of numsFreq) {
        if (freq && numsOccurrenceFreq[freq]) return false;
        numsOccurrenceFreq[freq] = true;
    }

    return true;
};