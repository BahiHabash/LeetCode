/**
 * @param {string} s
 * @return {number}
 */
const maxScore = function(s) {
    let [totalOnes, maxScore] = [0, 0];

    for (const c of s) {
        if (c === '1') totalOnes++;
    }

    let [curr0, curr1] = [0, 0];
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') curr0++;
        else curr1++;

        const currScore = curr0 + (totalOnes - curr1);
        maxScore = Math.max(maxScore, currScore);
    }

    return maxScore;
};