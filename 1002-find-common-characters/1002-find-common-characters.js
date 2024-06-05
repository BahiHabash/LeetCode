/**
 * @param {string[]} words
 * @return {string[]}
 */
const commonChars = function(words) { // Time : O(n * lengthOfWords), Space : O(1)
    let commonCharsMap = getCharsFreq(words[0]);

    for (let i = 0; i < words.length; i++) {
        const currCommonCharsMap = new Map();
        wordCharsFreq = getCharsFreq(words[i]);
        for (const [char, freq] of wordCharsFreq.entries()) {
            if (commonCharsMap.has(char))
                currCommonCharsMap.set(char, Math.min(freq, commonCharsMap.get(char)));
        }

        commonCharsMap = currCommonCharsMap;
    }

    const res = [];
    for (const [char, freq] of commonCharsMap.entries()) {
        res.push(...(char.repeat(freq)));
    }

    return res;
};

const getCharsFreq = function(str) {
    const charFreq = new Map();
    for (const char of str)
        charFreq.set(char, (charFreq.get(char) ?? 0) + 1);
    return charFreq;
}