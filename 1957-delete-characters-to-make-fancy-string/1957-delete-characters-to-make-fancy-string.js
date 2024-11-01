/**
 * @param {string} s
 * @return {string}
 */
const makeFancyString = function(s) {
    let stack = [];

    for (const char of s) {
        if (!(stack.at(-1) === char && stack.at(-2) === char))
            stack.push(char);
    }

    return stack.join('');
};