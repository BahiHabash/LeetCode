/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function areAlmostEqual(s1, s2) {
    if (s1.length !== s2.length) return false;

    let numOfDiff = 0;
    const charFreq = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        charFreq[s1[i].charCodeAt(0) - 97]++;
        charFreq[s2[i].charCodeAt(0) - 97]--;

        numOfDiff += (s1[i] !== s2[i]);
    }

    if ((numOfDiff !== 0) && (numOfDiff !== 2)) return false;

    return charFreq.every((freq) => freq === 0);
}