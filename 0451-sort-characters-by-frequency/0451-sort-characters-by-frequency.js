/**
 * @param {string} s
 * @return {string}
 */
// Time : O(n * log(n)), Space : O(n)
const frequencySort = function(s) { 
    // [char : its frequency]
    const charFrequency = new Map(); 
    
    // fill the charFrequency map   
    for (const char of s)            
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    
    // sort the chars based on greatest frequency
    const frequency = [...charFrequency.entries()].sort((a, b) => b[1] - a[1]);
    
    // generate the sorted string
    let sortedStr = '';
    for (const [char, freq] of frequency) 
        sortedStr += char.repeat(freq);
    
    return sortedStr;
};