/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function(num) {
    while (num > 9) 
        num = sumOfDigits(num);

    return num;
};

const sumOfDigits = function (n) {
    let sum = 0;
    while (n) {
        sum += (n % 10);
        n = Math.floor(n / 10);
    }
    return sum;
}