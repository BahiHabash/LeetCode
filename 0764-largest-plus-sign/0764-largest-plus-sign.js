/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
const orderOfLargestPlusSign = function(n, mines) {
    if (mines.length === n * n)
        return 0;
    
    const grid = new Array(n).fill(null).map(() => new Array(n).fill(1));
    mines.forEach(([i, j]) => grid[i][j] = 0);
    
    let maxOrder = 1;

    for (let i = 1; i < n - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (grid[i][j] === 1)
                maxOrder = Math.max(orderOfPlusSign(grid, i, j, n), maxOrder);
        }
    }

    return maxOrder;
};

const orderOfPlusSign = function(grid, i, j, n) {
    let up = 0;
    for (let k = i; k >= 0; k--)
        if (grid[k][j] === 1) up++;
        else break;
        
    let down = 0;
    for (let k = i; k < n; k++)
        if (grid[k][j] === 1) down++;
        else break;
        
    let right = 0;
    for (let k = j; k < n; k++)
        if (grid[i][k] === 1) right++;
        else break;
        
    let left = 0;
    for (let k = j; k >= 0; k--)
        if (grid[i][k]) left++;
        else break;
    
    return Math.min(left, right, up, down);
}  