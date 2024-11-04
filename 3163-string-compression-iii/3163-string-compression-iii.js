/**
 * @param {string} word
 * @return {string}
 */
const compressedString = function(word) {
    let comp = '';
    let prefix = '';

    for (const char of word) {
        if (
            prefix.length &&
           ( prefix.length === 9 || char !== prefix.at(-1) )
        ) {
            comp += `${prefix.length}${prefix[0]}`;
            prefix = '';
        }

        prefix += char;
    }

    if (prefix.length) {
        comp += `${prefix.length}${prefix[0]}`;
        prefix = null;
    }

    return comp;
};