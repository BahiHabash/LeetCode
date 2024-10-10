/**
 * @param {string} s
 * @return {number}
 */
const minAddToMakeValid = function(s) {
    let misClosing = 0;
    let balance = 0;
    
    for (const char of s) {
        balance += char === '(' ? 1 : -1;
        
        if (balance < 0) {
            balance = 0;
            misClosing++;
        }
    }
    
    return misClosing + balance
};