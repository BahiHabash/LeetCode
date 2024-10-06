/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
const areSentencesSimilar = function(sentence1, sentence2) {
    let words1 = sentence1.split(' ');
    let words2 = sentence2.split(' ');

    if (words1.length > words2.length) {
        [words1, words2] = [words2, words1];
    }

    let count = 0;
    
    for (let i = 0; i <= words1.length; i++) {
        if (words1[i] === words2[i]) count++;
        else break;
    }
    
    for (let i = 1; i <= words1.length; i++) {
        if (words1.at(-i) === words2.at(-i)) count++;
        else break;
    }

    return count >= words1.length;
};