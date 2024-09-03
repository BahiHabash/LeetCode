/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const getLucky = function(s, k) {
    let int = '';
    for (const char of s) int += (char.charCodeAt(0) - 96);

    while (k--) {
        int = String( sumOfDigits(int) );
    }

    return +int;
};

const sumOfDigits = function(num = '0') {
    let sum = 0;

    for (const digit of num) {
        sum += +digit;
    }

    return sum;
};
