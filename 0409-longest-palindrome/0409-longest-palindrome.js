/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) { // Time : O(n), Space : O(1)
    let numOfOdds = 0;
    const charSet = new Set();
    
    for (const char of s) {
        if (charSet.has(char)) {
            charSet.delete(char);
            numOfOdds--;
        }
        else {
            charSet.add(char);
            numOfOdds++;            
        }
    }
    
    return s.length - numOfOdds + (numOfOdds > 0);
};