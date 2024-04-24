/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
        let newStr = '';
        const maxLen = Math.max(word1.length, word2.length);
        for (let i = 0; i < maxLen; i++) {
            newStr += word1[i] ?? '';
            newStr += word2[i] ?? '';
        }
        return newStr;
};