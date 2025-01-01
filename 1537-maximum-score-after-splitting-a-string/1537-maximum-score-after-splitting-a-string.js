/**
 * @param {string} s
 * @return {number}
 */
const maxScore = function(s) {
    let ones = 0
    for (const c of s) {
        if (c === '1') ones++;
    }

    let [zeroes, maxScore] = [0, 0];
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0'){
            zeroes++;
        } else {
            ones--;
        }

        maxScore = Math.max(maxScore, zeroes + ones);
    }

    return maxScore;
};