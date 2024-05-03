/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function(s, t) {
    if (s.length < t.length) return '';
    
    const tCharFrequency = Array(128).fill(0);
    const sCharFrequency = Array(128).fill(0);
    let requiredChars = 0;
    let l = 0, r = 0
      , minSubString = '', minLength = Infinity;

    for (const char of t) {
        tCharFrequency[char.charCodeAt(0)]++;
        if (tCharFrequency[char.charCodeAt(0)] === 1) 
            requiredChars++;
    }

    while (r < s.length) {
        const rChar = s[r].charCodeAt(0);
        sCharFrequency[rChar]++;
        if (sCharFrequency[rChar] === tCharFrequency[rChar]) 
            requiredChars--;

        while (requiredChars === 0) {
            if ((r - l + 1) < minLength){
                minSubString = s.slice(l, r + 1);
                minLength = minSubString.length;
            }
            
            const lChar = s[l].charCodeAt(0);
            if (sCharFrequency[lChar] === tCharFrequency[lChar]) 
                requiredChars++;
            sCharFrequency[lChar]--;
            
            l++;
        }
        
        r++;
    }

    return minSubString;
};
