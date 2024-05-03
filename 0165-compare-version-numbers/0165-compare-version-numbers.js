/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function(version1, version2) {
    const revisions1 = version1.split('.')
        , revisions2 = version2.split('.')
        , len = Math.max(revisions1.length, revisions2.length);
    
    for (let i = 0; i < len; i++) {
        if (+(revisions1[i] ?? 0) > +(revisions2[i] ?? 0))
            return 1;
        else if (+(revisions1[i] ?? 0) < +(revisions2[i] ?? 0))
            return -1;
    }

    return 0;
};