/**
 * @param {string} s
 * @return {number}
 */
const partitionString = function(s) {
    const currWindow = new Set();
    let minNumOfPartitions = 0;
    
    for (const char of s) {
        if (currWindow.has(char)) {
            currWindow.clear();
            minNumOfPartitions++;
        }
        currWindow.add(char);
    }
    
    return minNumOfPartitions + (currWindow.size > 0);
};