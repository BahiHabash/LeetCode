/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
const addSpaces = function(s, spaces) {
    let res = '';
    let sIdx = 0;

    for (const i of spaces) {
        res += s.slice(sIdx, i) + ' ';
        sIdx = i;
    }

    res += s.slice(sIdx);

    return res;
};