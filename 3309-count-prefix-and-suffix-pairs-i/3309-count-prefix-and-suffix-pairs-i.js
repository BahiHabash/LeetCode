/**
 * @param {string[]} words
 * @return {number}
 */
function countPrefixSuffixPairs(words) {
    let count = 0;

    for (let i = 0; i < words.length; i++) 
        for (let j = i + 1; j < words.length; j++) 
            count += (words[j].startsWith(words[i]) && words[j].endsWith(words[i]));

    return count;
};