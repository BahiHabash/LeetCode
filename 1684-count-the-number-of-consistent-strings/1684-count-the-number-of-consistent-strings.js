/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = function(allowed, words) {
    const allowedChars = new Set(allowed.split(''));
    let numOfConsistentWords = 0;
    
    for (const word of words) {
        numOfConsistentWords += [...word].every(char => allowedChars.has(char));
    }
    
    return numOfConsistentWords;
};