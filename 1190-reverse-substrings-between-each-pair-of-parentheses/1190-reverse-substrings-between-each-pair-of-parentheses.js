/**
 * @param {string} s
 * @return {string}
 */
const reverseParentheses = function(s) {
    const stack = [];
    
    for (const char of s) {
        if (char === ')') {
            const idx = stack.lastIndexOf('(');
            stack.splice(idx, stack.length - idx, ...stack.slice(idx + 1).reverse());
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
};