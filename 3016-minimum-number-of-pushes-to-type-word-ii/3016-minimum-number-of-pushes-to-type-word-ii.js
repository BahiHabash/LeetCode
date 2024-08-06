/**
 * @param {string} word
 * @return {number}
 */
const minimumPushes = function(word) {
    const charsFreq = new Map();
    
    for (const char of word) {
        charsFreq.set(char, (charsFreq.get(char) ?? 0) + 1);
    }

    const sortedCharsFreq = [...charsFreq.entries()]
                .sort(([_, freq1], [__, freq2]) => freq2 - freq1);
    
    const NUMER_OF_BUTTONS = 8;
    let minPushesToTypeWord = 0;
    let numOfUniqueChars = 0;
    let minAvilableNumOfPushes = 1;

    for (const [char, freq] of sortedCharsFreq) {
        numOfUniqueChars++;
        minPushesToTypeWord += (freq * minAvilableNumOfPushes);
        minAvilableNumOfPushes += (numOfUniqueChars % NUMER_OF_BUTTONS === 0);
    }

    return minPushesToTypeWord;
};