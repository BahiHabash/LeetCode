/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    for (const prime of [2, 3, 5])
        while ((n > 1) && (n % prime === 0))
            n /= prime;
    
    return n === 1;
};