/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
const countSubIslands = function(grid1, grid2) {
    const [m, n] = [grid1.length, grid1[0].length];
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const withinBoundaries = function(row, col) {
        return row >= 0 && col >= 0 && row < m && col < n;
    };

    const dfs = function(grid, row, col) {
        if (grid[row][col] !== 1) {
            return true; // If it's not land, it doesn't affect sub-island status.
        }

        // Mark as visited
        grid[row][col] = '#';

        // Check if this part of grid2 is also a valid part of grid1
        let isSubIsland = grid1[row][col] === 1;

        // Explore all 4 directions
        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;

            if (withinBoundaries(newRow, newCol)) {
                // If dfs returns false for any neighbor, then it's not a sub-island
                if (!dfs(grid, newRow, newCol)) {
                    isSubIsland = false;
                }
            }
        }

        return isSubIsland;
    };
    
    let numOfSubIslands = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid2[i][j] === 1) {
                numOfSubIslands += dfs(grid2, i, j);
            }
        }
    }

    return numOfSubIslands;
};
