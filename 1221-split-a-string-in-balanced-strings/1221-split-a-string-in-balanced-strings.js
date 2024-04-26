/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function(s) {
    let balance = 0;
    let numOfBalancedStr = 0;


    for (const char of s) {
        balance += (char === 'R');
        balance -= (char === 'L');
        numOfBalancedStr += (balance === 0)
    }

    return numOfBalancedStr;
};