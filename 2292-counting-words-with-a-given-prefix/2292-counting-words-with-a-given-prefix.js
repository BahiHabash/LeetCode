/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
const prefixCount = function(words, pref) {
    return words.reduce((acc, word) => acc + word.startsWith(pref), 0);
};