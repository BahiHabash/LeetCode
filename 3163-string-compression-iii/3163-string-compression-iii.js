/**
 * @param {string} word
 * @return {string}
 */
const compressedString = function(word) {
    if (!word) return '';
    
    const len = word.length;
    let comp = '';
    let [prefixChar, prefixLength] = [word[0], 1];

    for (let i = 1; i < len; i++) {
        // check if we get maximum length prefix of word made of a single character c repeating at most 9 times
        if (word[i] !== prefixChar || prefixLength === 9) {
            comp += `${prefixLength}${prefixChar}`;
            [prefixChar, prefixLength] = ['', 0];
        }

        prefixChar = word[i];
        prefixLength++;
    }
    // append the remaing prefix if exited
    if (prefixLength) {
        comp += `${prefixLength}${prefixChar}`;
    }

    return comp;
};