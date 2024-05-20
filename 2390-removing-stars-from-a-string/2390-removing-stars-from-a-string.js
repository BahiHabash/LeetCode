/**
 * @param {string} s
 * @return {string}
 */
const removeStars = function(s) { // Time : O(n), Space : O(n)
    const stack = [];
    for (const char of s) {
        if (char === '*')
            stack.pop();
        else
            stack.push(char);
    }
    return stack.join('');
};