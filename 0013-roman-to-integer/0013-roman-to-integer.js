/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) { // Time : O(n), Space : O(n)
    const symbolVal = {
        'I' : 1, 
        'V' : 5, 
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
        'IV' : 4,
        'IX' : 9,
        'XL' : 40,
        'XC' : 90,
        'CD' : 400,
        'CM' : 900,
    }

    let num = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (symbolVal.hasOwnProperty(s[i - 1] + s[i])) {
            num += symbolVal[s[i - 1] + s[i]];
            i--;
        }
        else {
            num += symbolVal[s[i]];
        }
    }

    return num;
};