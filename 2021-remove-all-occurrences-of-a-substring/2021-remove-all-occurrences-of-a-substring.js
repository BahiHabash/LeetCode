/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
function removeOccurrences (s, part) {
    const stack = [];

    for (const char of s) {
        stack.push(char);

        while (stack.slice(-part.length).join('') === part) {
            stack.splice(-part.length);
        }
    }

    return stack.join('');
}