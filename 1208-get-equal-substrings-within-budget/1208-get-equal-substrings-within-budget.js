/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
const equalSubstring = function(s, t, maxCost) { // Time : O(n), Space : O(1)
    let maxLen = 0;
    let currCost = 0;
    for (let l = 0, r = 0; r < t.length; r++) {
        // expand the window 
        currCost += calcCharsDiff(s[r], t[r]);
        // shrink the window when the currCost exeeded maxCost allowed
        if (currCost > maxCost) {
            currCost -= calcCharsDiff(s[l], t[l]);
            l++;
        }
        // update maxLen of subarray with cost less than or equal to maxCost so far
        maxLen = Math.max((r - l + 1), maxLen);
    }

    return maxLen;
};
/**
 * @param {string} char1
 * @param {string} char2
 * @return {number} The absolute difference between the ASCII values of the characters
 */
const calcCharsDiff = function(char1, char2) {
    return Math.abs(char1.charCodeAt(0) - char2.charCodeAt(0));
};