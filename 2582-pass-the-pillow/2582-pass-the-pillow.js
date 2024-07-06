/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
const passThePillow = function(n, time) { // time : O(1), space : O(1)
    const edges = n - 1;
    
    if (Math.floor(time / edges) % 2 === 1) {
        return n - Math.abs(time % edges);
    } else {
        return 1 + Math.abs(time % edges);
    }
};