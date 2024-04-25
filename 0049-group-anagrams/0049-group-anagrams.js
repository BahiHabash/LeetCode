/**
* @param {string[]} strs
* @return {string[][]}
*/
const groupAnagrams = function(strs) {
    const anagramsGroup = new Map();

    for (const str of strs) {
        const key = [...str].sort().join('');

        if (! anagramsGroup.has(key))
            anagramsGroup.set(key, []);

        anagramsGroup.get(key).push(str);
    }

    return [...anagramsGroup.values()];
};