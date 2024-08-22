/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function(num) {
    let binComplement = '';

    for (const digit of num.toString(2)) {
        binComplement += digit === '1' ? 0 : 1;
    }

    return parseInt(binComplement, 2);
};