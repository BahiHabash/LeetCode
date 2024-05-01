/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function(num) {
    while (num > 9) 
        num = [...`${num}`].reduce((acc, digit) => acc + +digit, 0);

    return num;
};
