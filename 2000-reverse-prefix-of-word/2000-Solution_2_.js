/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
const reversePrefix = function(word, ch) {
    const i = word.indexOf(ch);
    return  reverseStr(word.slice(0, i + 1)) + word.slice(i + 1);
};

const reverseStr = function(word) {
    let reversedWord = '';
    for (const char of word)
        reversedWord = char + reversedWord;
    return reversedWord;
}
