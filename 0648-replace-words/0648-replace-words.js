/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
const replaceWords = function(dictionary, sentence) {
    const roots = new Set(dictionary);
    const words = sentence.split(' ');

    for (const [i, word] of words.entries()) {
        for (let j = 0; j < word.length; j++) {
            const currRoot = word.slice(0, j + 1);
            if (roots.has(currRoot)) {
                words[i] = currRoot;
                break;
            }
        }
    }

    return words.join(' ');
};