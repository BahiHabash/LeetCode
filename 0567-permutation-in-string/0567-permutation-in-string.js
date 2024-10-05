/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function(s1, s2) {
    const freqArr1 = new Array(26).fill(0);
    for (const char of s1) {
        const charIdx = char.charCodeAt(0) - 'a'.charCodeAt(0);
        freqArr1[charIdx]++;
    }
    
    let currLen = 0;
    const freqArr2 = new Array(26).fill(0);

    for (let i = 0; i < s2.length; i++) {
        const charIdx = s2[i].charCodeAt(0) - 'a'.charCodeAt(0);

        currLen++;
        freqArr2[charIdx]++;

        if (currLen < s1.length) continue;

        if ( isContainsPermutation(freqArr1, freqArr2) ) return true;

        const frontCharIdx = s2[i - currLen + 1].charCodeAt(0) - 'a'.charCodeAt(0);
        freqArr2[frontCharIdx]--;
        currLen--;
    }

    return false;
};

const isContainsPermutation = function(freqArr1, freqArr2) {
    return freqArr1.every((charFreq, i) => 
        freqArr2[i] === charFreq
    );
};
