/**
 * @param {number} n
 * @return {number[]}
 */
const getNoZeroIntegers = function(n) {
    let [n1, n2] = [1, n - 1];

    while (n1 <= n2) {
        if (isNonZero(n1) && isNonZero(n2)) return [n1, n2];
        n1++, n2--;
    }
};

const isNonZero = function(n) {
    return [...String(n)].every(digit => digit !== '0');
}