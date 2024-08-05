/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
const countWords = function(words1, words2) { //time: O(len1 + len2), space: O(len1 + len2)
    const words1Freq = new Map(); 
    const words2Freq = new Map(); 

    words1.forEach(word =>
        words1Freq.set(word, (words1Freq.get(word) ?? 0) + 1)
    );
    words2.forEach(word =>
        words2Freq.set(word, (words2Freq.get(word) ?? 0) + 1)
    );

    let numOfCommonUniqueWords = 0;

    for (const [word, freq] of words1Freq.entries()) {
        numOfCommonUniqueWords += ((freq === 1) && (words2Freq.get(word) === 1));
    }

    return numOfCommonUniqueWords;
};