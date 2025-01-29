/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
function wordPattern (pattern, s) {
    const words = s.split(' ');   // extract words
    const wordsMap = new Map();   // {word: index}
    const patternMap = new Map(); // {char: index}

    if (words.length !== pattern.length) return false;

    for (let i = 0; i < words.length; i++) {
        // if previous occurance doesn't match that breaks the pattern
        if (wordsMap.get(words[i]) !== patternMap.get(pattern[i])) {
            return false;
        } 

        // update the occurance index
        wordsMap.set(words[i], i);
        patternMap.set(pattern[i], i);
    }

    return true;
}