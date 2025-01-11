/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
const canConstruct = function(s, k) {
    // Handle edge Cases
    if (s.length < k) return false;
    if (s.length === k) return true;

    // count chars' frequencies 
    const freqArr = new Array(26).fill(0);
    for (const char of s) {
        freqArr[char.charCodeAt(0) - 97]++;
    }

    // count how many odds existed
    let odd = 0;
    for (const freq of freqArr) {
        odd += (freq % 2 === 1);
    }

    // no way to combine more than one odd in a single palindrome
    return k >= odd;
};