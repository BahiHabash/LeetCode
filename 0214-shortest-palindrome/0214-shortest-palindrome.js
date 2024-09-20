/**
 * @param {string} s
 * @return {string}
 */
const shortestPalindrome = function(s) {
    const len = s.length; 
    const reversedStr = [...s].reverse().join('');

    for (let i = 0; i < len; i++) {
        if (s.slice(0, len - i) === reversedStr.slice(i)) {
            return reversedStr.slice(0, i) + s;
        }
    }

    return '';
};