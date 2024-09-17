/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
const uncommonFromSentences = function(s1, s2) {
    const [words1, words2] = [s1.split(' '), s2.split(' ')];
    const wordsFreq = new Map();

    words1.forEach(word => wordsFreq.set(word, (wordsFreq.get(word) ?? 0) + 1));
    words2.forEach(word => wordsFreq.set(word, (wordsFreq.get(word) ?? 0) + 1));

    let uncommonWords = [];

    for (const [word, freq] of wordsFreq.entries()) {
        if (freq === 1) uncommonWords.push(word);
    }

    return uncommonWords;
};