/**
 * @param {string} s
 * @return {number}
 */
const minLength = function(s) {
    const stack = [];
    
    for (const char of s) {
        const target = (stack.at(-1) ?? '') + char;
                        
        if (target === 'AB' || target === 'CD') {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return stack.length;
};