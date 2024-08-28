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

    const dfs = function(row, col) {
        if (!withinBoundaries(row, col) || grid2[row][col] === 0) {
            return true;
        }

        // If this part of grid2 is land but grid1 is water, it's not a sub-island.
        if (grid1[row][col] === 0) {
            return false;
        }

        // Mark the cell as visited
        grid2[row][col] = 0;

        let isSubIsland = true;

        for (const [i, j] of directions) {
            const [newRow, newCol] = [row + i, col + j];
            if (withinBoundaries(newRow, newCol)) {
                // If any DFS call returns false, this is not a sub-island
                if (!dfs(newRow, newCol)) {
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
                numOfSubIslands +=dfs(i, j);
            }
        }
    }

    return numOfSubIslands;
};
