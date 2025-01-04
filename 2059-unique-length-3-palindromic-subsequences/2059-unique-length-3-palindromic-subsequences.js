/**
 * @param {string} s
 * @return {number}
 */
const countPalindromicSubsequence = function(s) {
    const mapp = new Map();

    for (let i = 0; i < s.length; i++) {
        // Update min index for this char so far
        if (!mapp.has(s[i])) {
            mapp.set(s[i], [i, 0]);
        } else {
            mapp.get(s[i])[1] = i;
        }
    }

    let count = 0;
    for (const [char, [left, right]] of mapp.entries()) {
        if ((right - left) >= 2) {
            count += new Set( [...s.slice(left + 1, right)] ).size;
        }
    }

    return count;
};