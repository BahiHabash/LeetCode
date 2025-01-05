/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
function shiftingLetters(s, shifts) {
    // get the total shifts
    const len = s.length;
    const totalShifts = new Array(len).fill(0);

    for (let [left, right, dir] of shifts) {
        dir ||= -1;

        totalShifts[left] += dir;

        if (right + 1 < len)
            totalShifts[right + 1] -= dir;
    }

    // calculate the comulative shits
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += totalShifts[i];
        totalShifts[i] = sum;
    }

    // generate the new string
    const LETTERS = 'abcdefghijklmnopqrstuvwxyz';
    let res = '';

    for (const [i, shift] of totalShifts.entries()) {
        if (shift === 0)
            res += s[i];
        else
            res += LETTERS.at((s[i].charCodeAt(0) - 97 + shift) % 26);
    }

    return res;
};