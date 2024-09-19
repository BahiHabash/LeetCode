/**
 * @param {string} s
 * @return {number}
 */
const minimizedStringLength = function(s) {
    const sChars = new Set([...s]);
    return sChars.size;
};