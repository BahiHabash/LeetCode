/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
const addSpaces = function(s, spaces) {
    const spacesIdx = new Set(spaces);

    let res = '';

    for (let i = 0; i < s.length; i++) {
        if (spacesIdx.has(i)) {
            res += ' ';
        }
        
        res += s[i];
    }

    return res;
};