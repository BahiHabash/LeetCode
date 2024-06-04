/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
    const charFreq = {};
    for (const char of s)
        charFreq[char] = (charFreq[char] ?? 0) + 1;
    
    let nOdds = 0; // number of odd charFrequnces
    let len = s.length; // the length of the longest palindrome that can be built with those letters
    for (const char in charFreq) {
        if (charFreq[char] % 2 === 1)
            len--, nOdds++;
    }

    return len + Math.min(nOdds, 1);
};