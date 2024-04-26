/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t) {
  let rStr = t;                  // rStr for remaining string of t
  
  for(let i=0; i<s.length; i++){
      const char = s[i];
        
      if(!rStr.includes(char))
        return false;
        
      rStr = rStr.slice(rStr.indexOf(s[i]) + 1)
  }
  
  return true;
};
