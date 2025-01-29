/**
 * @param {number} n
 * @return {boolean}
 */
function isStrictlyPalindromic(n) {
    for (let i = 2; i <= n - 2; i++) {
        if ( !isPalandrome(n.toString(i)) ) 
            return false;
    }

    return true;
}

function isPalandrome(str) {
    let [i, j] = [0, str?.length - 1 ?? 0];

    while (i < j) {
        if (str[i++] !== str[j--]) return false;
    }

    return true;
}