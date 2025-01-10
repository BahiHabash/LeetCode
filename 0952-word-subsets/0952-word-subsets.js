/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
const wordSubsets = function(words1, words2) {
    const words2FreqArr = new Array(26).fill(0);
    // get the max number of char frequency for all words2
    for (const word of words2) {
        for (const [i, freq] of getFreqArr(word).entries()) {
            words2FreqArr[i] = Math.max(freq, words2FreqArr[i]);
        }
    }

    const universalStrings = []; // the output

    for (const word1 of words1) {
        const word1FreqArr = getFreqArr(word1);
        const isUniversal = words2FreqArr.every((freq, i) => freq <= word1FreqArr[i]);

        if (isUniversal) universalStrings.push(word1);
    }

    return universalStrings;
};

/**
 * @param word
 * @return {Number[]} frequency character array
 */
function getFreqArr(word) {
    const freqArr = new Array(26).fill(0);

    for (const char of word) {
        freqArr[char.charCodeAt(0) - 97]++;
    }

    return freqArr;
}