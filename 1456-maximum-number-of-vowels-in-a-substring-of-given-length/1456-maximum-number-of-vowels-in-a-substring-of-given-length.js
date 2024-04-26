/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// Complixty : 
// Time  : O(n)
// Space : O(1)
var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let numOfCurrVowels = 0
      , maxNum = 0;

    // pick the initial window of length k
    for (let i = 0; i < k; i++)
        numOfCurrVowels += vowels.has(s[i]);

    maxNum = numOfCurrVowels;

    for (let i = 1; (k + i - 1) < s.length; i++) {
        numOfCurrVowels += vowels.has(s[k + i - 1]); // expand the window
        numOfCurrVowels -= vowels.has(s[i - 1]);     // shrink the window
        maxNum = Math.max(numOfCurrVowels, maxNum);  // update max number of vowels in a subString so far
    }

    return maxNum;
};
