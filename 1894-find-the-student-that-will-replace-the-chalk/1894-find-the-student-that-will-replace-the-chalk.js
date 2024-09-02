/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
const chalkReplacer = function(chalks, k) {
    const sumOfChalks = chalks.reduce((acc, n) => acc + n, 0);
    let balance = k % sumOfChalks;

    for (const [i, chalk] of chalks.entries()) {
        if (chalk > balance) return i;
        balance -= chalk;
    }
};