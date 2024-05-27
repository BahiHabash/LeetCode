/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) { // Time : O(n * m*log(m)) -> n : strs.length, m : strs' element length, Space : O(n)
    const anagrams = {};

    for (const str of strs) {
        const key = [...str].sort().join('');
        if (!anagrams.hasOwnProperty(key))
            anagrams[key] = [];
        anagrams[key].push(str);
    }

    return [...Object.values(anagrams)];
};
