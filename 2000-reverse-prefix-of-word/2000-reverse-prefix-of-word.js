/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
const reversePrefix = function(word, ch) { // Time : O(n), Space : O(n)
    let result = '';
    let pivot = word.indexOf(ch);

    for (let i = pivot; i >= 0; i--)
        result += word[i];

    result += word.slice(pivot + 1);    

    return result;
};