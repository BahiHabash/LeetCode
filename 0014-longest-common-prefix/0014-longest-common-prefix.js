/**
 * @param {string[]} strs
 * @return {string} longest prefix string or empty string if no existed
 */
const longestCommonPrefix = function(strs) { // time : O(n * m), Space : O(1) | n => num of strs, m length of smallest string
    const prefixSample = strs.reduce((acc, str) => acc < str.length ? str : acc, 0);
    const maxCommonPprefix = '';

    for (let i = prefixSample.length; i >= 0; i--) {
        const currPrefix = prefixSample.slice(0, i);
        let isPrefixCommon = true;

        for (const str of strs) {
            if (!str.startsWith(currPrefix)) {
                isPrefixCommon = false;
                break;
            }
        }

        if (isPrefixCommon)
            return currPrefix;
    }

    return '';
};