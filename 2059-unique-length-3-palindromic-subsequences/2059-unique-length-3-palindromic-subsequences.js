/**
 * @param {string} s
 * @return {number}
 */
const countPalindromicSubsequence = function(s) {
    // get min and max index for each char
    const charIdxBoundries = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!charIdxBoundries.has(s[i])) {
            charIdxBoundries.set(s[i], [i, 0]);
        } else {
            charIdxBoundries.get(s[i])[1] = i;
        }
    }

    // count all unique subsequences of length 3
    let count = 0;
    for (const [left, right] of charIdxBoundries.values()) {
        if ((right - left) >= 2) {
            count += new Set([ ...s.slice(left + 1, right) ]).size;
        }
    }

    return count;
};