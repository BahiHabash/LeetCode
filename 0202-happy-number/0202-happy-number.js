/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy (n) {
    const seen = new Set();

    while (n !== 1) {
        const squaresDigits = calcSquaresDigits(n);

        // if we get into loop then n not happy
        if (seen.has(squaresDigits)) return false; 

        seen.add(squaresDigits)
        n = squaresDigits;
    }

    return true;
}

function calcSquaresDigits(n) {
    let squaresDigits = 0;

    while (n) {
        squaresDigits += (n % 10)**2;
        n = Math.trunc(n / 10)
    }

    return squaresDigits
}