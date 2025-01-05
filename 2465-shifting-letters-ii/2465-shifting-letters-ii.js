/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
function shiftingLetters(s, shifts) {
    // get the total shifts
    const prefixStart = new Array(s.length).fill(0);
    const prefixEnd = new Array(s.length + 1).fill(0);

    for (const [left, right, dir] of shifts) {
        prefixStart[left] += (dir || -1);
        prefixEnd[right + 1] += (dir || -1);
    }

    const totalShifts = new Array(s.length).fill(0);

    let sum = 0;
    for (let i = 0; i < totalShifts.length; i++) {
        sum += (prefixStart[i] - prefixEnd[i]);
        totalShifts[i] = sum;
    }

    // generate the new string
    const LETTERS = 'abcdefghijklmnopqrstuvwxyz';
    let res = '';

    for (const [i, shift] of totalShifts.entries()) {
        if (shift === 0) {
            res += s[i]
        } else {
            res += LETTERS.at((s[i].charCodeAt(0) - 97 + shift) % 26);
        }
    }

    return res;
};