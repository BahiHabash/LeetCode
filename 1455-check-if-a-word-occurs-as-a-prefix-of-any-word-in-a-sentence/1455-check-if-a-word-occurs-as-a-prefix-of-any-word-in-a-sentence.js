/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
const isPrefixOfWord = function(sentence, searchWord) {
    const index = sentence
                    .split(' ')
                    .findIndex(word => word.startsWith(searchWord));

    return index + (index > -1);
};