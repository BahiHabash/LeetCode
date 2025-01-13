/**
 * @param {string} s
 * @return {number}
 */
function minimumLength(s) {
    const charFreq = new Array(26).fill(0);

    for (const char of s) {
        charFreq[char.charCodeAt(0) - 97]++;
    }

    let minLen = 0;

    for (const freq of charFreq) {
        if (freq === 0) continue;
        
        minLen += (freq % 2 === 0) ? 2 : 1; 
    }

    return minLen;
};