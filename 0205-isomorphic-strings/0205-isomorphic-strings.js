/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
    if (s.length !== t.length)
        return false;
    
    const sMap = new Map();
    const tMap = new Map();
    
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
        
        if (sMap.get(charS) !== tMap.get(charT))
            return false;
        
        sMap.set(charS, i);
        tMap.set(charT, i);
    }

    return true;
};