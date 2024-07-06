/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
const passThePillow = function(n, time) { // time : O(1), space : O(1)
    const edges = n - 1;
    return Math.floor(time / edges) % 2 === 1 ? n - time % edges : 1 + time % edges;
};