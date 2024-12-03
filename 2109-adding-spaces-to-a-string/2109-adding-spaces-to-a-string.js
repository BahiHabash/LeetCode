/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
const addSpaces = function(s, spaces) {
    let spaceIdx = 0;
    let res = '';

    for (let i = 0; i < s.length; i++) {
        if (spaces[spaceIdx] === i) {
            res += ' ';
            spaceIdx++;
        }
        
        res += s[i];
    }

    return res;
};