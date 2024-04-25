/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function(pattern, s) {    
    words = s.split(' ');
    
    if (words.length !== pattern.length) 
        return false;

    wordsMap = new Map();
    patternMap = new Map();

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const patternChar = pattern[i];

        if (wordsMap.get(word) !== patternMap.get(patternChar))
            return false;
        
        wordsMap.set(word, i);
        patternMap.set(patternChar, i);
    }

    return true;
};