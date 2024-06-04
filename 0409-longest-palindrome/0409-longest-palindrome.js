/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) { // Time : O(n), Space : O(n)
    const charFreq = new Map();
    for (const char of s)
        charFreq.set(char, (charFreq.get(char) || 0) + 1);
    
    let len = 0;
    let nOdds = 0;
    for (const [char, times] of charFreq.entries()) {
        if (times % 2 === 0)
            len += times;
        else {
            nOdds++;
            len += times - 1;
        }
    }

    return len + Math.min(nOdds, 1);
};