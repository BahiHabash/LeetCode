/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const len = Math.min(word1.length, word2.length);
    let i = 0
      , alternatingStr = '';

    for (; i < len; i++)
        alternatingStr += word1[i] + word2[i];
    
    alternatingStr += word1.slice(i) + word2.slice(i);

    return alternatingStr;
};