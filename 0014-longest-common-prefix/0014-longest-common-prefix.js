/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) { // O(n * m) time | O(1) space
    let prefix = strs[0] || '';
    
    for (const str of strs)
        prefix = getPrefix(prefix, str);

    return prefix;
};


/**
 * @param {string[], sring[]} strs
 * @return {string}
 */
const getPrefix = function(str1, str2) {
    let i = 0;
    while ((i < str1.length) && (str1[i] === str2[i]))
        i++;
        
    return str1.slice(0, i);
}