/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
const canMakeSubsequence = function(str1, str2) { // Time: O(n + m), Space: O(1)
    let idx = 0;

    for (const char2 of str2) {
        let found = false;

        for (let i = idx; i < str1.length; i++) {
            const nextChar = String.fromCharCode((str1[i].charCodeAt(0) - 97 + 1) % 26 + 97)
            if (char2 === nextChar || char2 === str1[i]) {
                found = true;
                idx = i + 1; 
                break;
            }
        }

        if (!found) {
            return false;
        }
    }

    return true;
};