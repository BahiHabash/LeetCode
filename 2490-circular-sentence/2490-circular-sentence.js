/**
 * @param {string} sentence
 * @return {boolean}
 */
const isCircularSentence = function(sentence) {
    const words = sentence.split(' ');
    const len = words.length;

    for (let i = 0; i < len; i++) {
        if (words[i].at(-1) !== words[(i + 1) % len].at(0)) {
            return false;
        }
    }

    return true;
};