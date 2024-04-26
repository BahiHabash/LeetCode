/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t) {   
    if (s.length > t.length)
        return false;
    
    let i = 0
       ,j = 0;
    
    while ((i < s.length) && (j < t.length)) {
        currChar = s[i];
        
        while ((j < t.length) && (t[j] !== currChar))
            j++;
        
        if (j >= t.length && i < s.length)
            return false;
        
        i++, j++;
    }

    
    return i === s.length;
};