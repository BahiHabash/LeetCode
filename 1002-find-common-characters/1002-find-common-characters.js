/**
 * @param {string[]} words
 * @return {string[]}
 */
const commonChars = function(words) { // Time : O(n * lengthOfWord), Space : O(1)
    let commonCharsMap = getCharsFreq(words[0]);

    for (let i = 1; i < words.length; i++) {
        const wordCharsFreq = getCharsFreq(words[i]); // get word's char frequency

        for (const [char, freq] of wordCharsFreq.entries()) { // set common chars with the least freq
            if (commonCharsMap.has(char))
                commonCharsMap.set(char, Math.min(freq, commonCharsMap.get(char)));
        }

        for (const [char, freq] of commonCharsMap.entries()) { // delete non-common chars
            if (!wordCharsFreq.has(char))
                commonCharsMap.delete(char);
        }
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