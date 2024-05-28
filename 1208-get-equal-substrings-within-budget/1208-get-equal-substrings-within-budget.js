/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
const equalSubstring = function(s, t, maxCost) { // Time : O(n), Space : O(n)
    // sotre the difference between the (i)th chars in s and t
    const charsDiffArr = [];
    for (let i = 0; i < t.length; i++) {
        charsDiffArr.push(Math.abs(s[i].charCodeAt(0) - t[i].charCodeAt(0)));
    }

    let maxLen = 0;
    let currCost = 0;
    for (let l = 0, r = 0; r < t.length; r++) {
        // expand the window 
        currCost += charsDiffArr[r];
        // shrink the window when the currCost exeeded maxCost allowed
        if (currCost > maxCost) {
            currCost -= charsDiffArr[l++];
        }
        // update maxLen of subarray with cost less than or equal to maxCost so far
        maxLen = Math.max((r - l + 1), maxLen);
    }

    return maxLen;
};