/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
    const m = grid.length
        , n = grid[0].length
        , visited = new Set();
    let count = 0;
    
    /**
     * @param {number} i
     * @param {number} j
     * @return {boolean}
     */
    const inBoundry = function(i, j) {
        return (i >= 0) && (j >= 0) && (i < m) && (j < n);
    };
    
    /**
     * @param {character[][]} grid
     * @param {number} i
     * @param {number} j
     */
    const dfs = function(grid, i, j) {
        visited.add(`${i},${j}`);
        if (inBoundry(i, j + 1) && !visited.has(`${i},${j + 1}`) && grid[i][j + 1] === '1') dfs(grid, i, j + 1);
        if (inBoundry(i, j - 1) && !visited.has(`${i},${j - 1}`) && grid[i][j - 1] === '1') dfs(grid, i, j - 1);
        if (inBoundry(i + 1, j) && !visited.has(`${i + 1},${j}`) && grid[i + 1][j] === '1') dfs(grid, i + 1, j);
        if (inBoundry(i - 1, j) && !visited.has(`${i - 1},${j}`) && grid[i - 1][j] === '1') dfs(grid, i - 1, j);
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited.has(`${i},${j}`) && grid[i][j] === '1'){
                dfs(grid, i, j);
                count++;
            }
        }
    }


    return count;
};