/**
 * @param {number[][]} grid
 * @return {number}
 */
function gridGame(grid) {
    const len = grid[0].length;
    const prefixTop = new Array(len + 1).fill(0);
    const prefixBottom = new Array(len + 1).fill(0);

    for (let i = 0; i < len; i++) {
        prefixTop[i + 1] = prefixTop[i] + grid[0][i];
        prefixBottom[i + 1] = prefixBottom[i] + grid[1][i];
    }
    
    let res = Infinity;

    for (let i = 0; i < len; i++) {
        option1 = prefixTop[len] - prefixTop[i + 1];
        option2 = prefixBottom[i];
        
        res = Math.min(res, Math.max(option1, option2));
    }   

    return res;
}