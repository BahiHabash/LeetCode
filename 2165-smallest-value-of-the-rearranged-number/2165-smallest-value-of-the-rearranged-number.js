/**
 * @param {number} num
 * @return {number}
 */
const smallestNumber = function(num) {
    if (num === 0) return num;

    if (num < 0) {
        const digits = String(num)
                    .slice(1)
                    .split('')
                    .sort((a, b) => b - a);

        return  -1 * digits.join('');
    }


    const digits = String(num)
                .split('')
                .sort((a, b) => a - b);

    if (digits[0] === '0') {
        const firstNonZeroIndex = digits.findIndex(digit => digit !== '0');
        digits[0] = digits[firstNonZeroIndex];
        digits[firstNonZeroIndex] = '0';
    }

    return +digits.join('');
};