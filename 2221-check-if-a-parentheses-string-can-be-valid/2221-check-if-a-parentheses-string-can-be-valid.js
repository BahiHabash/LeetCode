/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
function canBeValid(s, locked) {
    if (s.length % 2 === 1) return false;

    let balance = 0;
    let unlocked = 0;

    for (let i = 0; i < s.length; i++) {
        if (locked[i] === '0') {
            unlocked++;
        } else if (s[i] === '(') {
            balance++;
        } else {
            balance--;
        }

        if (balance + unlocked < 0) return false;
    }

    balance = 0;
    unlocked = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (locked[i] === '0') {
            unlocked++;
        } else if (s[i] === ')') {
            balance++;
        } else {
            balance--;
        }

        if (balance + unlocked < 0) return false;
    }

    return true;
};