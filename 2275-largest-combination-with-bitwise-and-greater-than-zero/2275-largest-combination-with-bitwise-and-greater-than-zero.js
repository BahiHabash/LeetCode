/**
 * @param {number[]} candidates
 * @return {number}
 */
const largestCombination = function(candidates) {
    const bit1Freq = new Array(24).fill(0);
        
    candidates.forEach(n => {
        const binaryN = n.toString(2).padStart(24, '0');
        for (let i = 0; i < 24; i++) {
            if (binaryN[i] === '1') bit1Freq[i]++;
        }
    });
    
    return Math.max(...bit1Freq);
};