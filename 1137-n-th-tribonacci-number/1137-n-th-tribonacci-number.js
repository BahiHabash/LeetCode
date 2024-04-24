/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n === 0)
        return 0;
    if (n <= 2)
        return 1;
    
    let t1 = 0,
        t2 = 1,
        t3 = 1,
        curr = 0;
    
    for (let i = 3; i <= n; i++) {
        curr = t1 + t2 + t3;
        t1 = t2;
        t2 = t3;
        t3 = curr;
    }
    
    return curr;
};
