/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
const canConstruct = function(s, k) {
    if (s.length < k) return false;
    else if (s.length === k) return true;

    const freqArr = new Array(26).fill(0);
    for (const char of s) {
        freqArr[char.charCodeAt(0) - 97]++;
    }

    let odd = 0;
    let evenPairs = 0;
    for (let [i, freq] of freqArr.entries()) {
        if (freq % 2 === 1) {
            odd++;
            freqArr[i] = --freq;
        }

        evenPairs += freq / 2;
    }

    return k >= odd;
};