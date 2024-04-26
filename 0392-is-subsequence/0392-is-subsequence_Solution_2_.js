/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t) {
    let i = 0
      , remainingOfT = t;
    
    for (const char of s) {
        remainingOfT = remainingOfT.slice(i);
        i = remainingOfT.indexOf(char) + 1;
        
        if (i === 0)
            return false;
    }
    
    return true;
};
