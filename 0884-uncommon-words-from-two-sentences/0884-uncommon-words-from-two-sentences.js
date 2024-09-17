/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
const uncommonFromSentences = function(s1, s2) {
    const [words1, words2] = [s1.split(' '), s2.split(' ')];
    const [map1, map2] = [new Map(), new Map()];

    words1.forEach(word => map1.set(word, (map1.get(word) ?? 0) + 1));
    words2.forEach(word => map2.set(word, (map2.get(word) ?? 0) + 1));

    let uncommonWords = [];

    for (const [word, freq] of map1.entries())
        if (freq === 1 && !map2.has(word)) uncommonWords.push(word);

    for (const [word, freq] of map2.entries())
        if (freq === 1 && !map1.has(word)) uncommonWords.push(word);

    return uncommonWords;
};