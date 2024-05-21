/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) { // Time : O(n), Space : O(1)
    const currExistedChars = new Set();
    let maxLenOfSubstringWithoutRepeatingChars = 0;

    for (let left = 0, right = 0; right < s.length; right++) {
        const currChar = s[right];
        if (currExistedChars.has(currChar)) {
            // Remove characters from the set until we remove the duplicate character
            while (currExistedChars.has(currChar)) {
                currExistedChars.delete(s[left++]);
            }
        }
        // Add the current character to the set
        currExistedChars.add(currChar);
        // Update the maximum length found
        maxLenOfSubstringWithoutRepeatingChars = Math.max(right - left + 1, maxLenOfSubstringWithoutRepeatingChars);
    }

    return maxLenOfSubstringWithoutRepeatingChars;
};
