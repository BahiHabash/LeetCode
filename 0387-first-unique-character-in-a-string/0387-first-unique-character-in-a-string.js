/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) { // Time ; O(n), Space :(unique chars in s)
    const charFreq = {};
    for (let i = 0; i < s.length; i++) 
        charFreq[s[i]] = (charFreq[s[i]] ?? 0) + 1;

    for (let i = 0; i < s.length; i++) 
        if (charFreq[s[i]] === 1) return i;
    
    return -1;
};