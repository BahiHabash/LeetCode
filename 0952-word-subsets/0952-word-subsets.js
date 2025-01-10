/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
const wordSubsets = function(words1, words2) {
    const words1Maps = words1.map(word => creatFreqMap(word));
    const words2Map = new Map();

    for (const word of words2) {
        const wordMap = creatFreqMap(word);

        for (const [char, freq] of wordMap) {
            words2Map.set(
                char, Math.max(freq, words2Map.get(char) ?? -Infinity)
            );
        }
    }

    const universalStrings = [];

    for (const [i, word1Map] of words1Maps.entries()) {
        let areSubsets = true;

        for (const [char, freq] of words2Map) {
            if ((word1Map.get(char) ?? 0) < freq) {
                areSubsets = false;
                break;
            }
        }

        if (areSubsets) {
            universalStrings.push(words1[i]);
        }
    }

    return universalStrings;
};

function creatFreqMap(word) {
    const freqMap = new Map();

    for (const char of word) {
        freqMap.set(char, (freqMap.get(char) ?? 0) + 1);
    }

    return freqMap;
}