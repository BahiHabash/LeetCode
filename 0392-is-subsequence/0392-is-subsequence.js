/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t) {
    let i = 0;
    for (const char of t) {
        if (char === s[i]) i++;
        if (i === s.length) return true;
    }
    return i === s.length;
};