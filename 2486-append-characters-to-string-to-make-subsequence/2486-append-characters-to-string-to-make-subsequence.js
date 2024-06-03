/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const appendCharacters = function(s, t) { // Time : O(n), Space : O(1)
    let i = 0;

    for (const char of s)
        if (char === t[i]) i++;

    return t.length - i;
}; 