/**
 * @param {number[][]} grid
 * @return {number}
 */
const findMaxFish = function(grid) { // Time : O(n * m), Space : O(1)
    // Handle edge cases (empty and null grid)
    if ((!grid) || (grid.length === 0) || (grid[0].length === 0)) {
        return 0;
    }

    let maxFish = 0;
    const m = grid.length;
    const n = grid[0].length;

    /**
     * Checks if the given cell is within the grid boundaries.
     * @param {number} row - The row index.
     * @param {number} col - The column index.
     * @return {boolean} True if the cell is within boundaries, False otherwise.
     */
    const inBoundry = function(row, col) {
        return (row >= 0) && (col >= 0) && (row < m) && (col < n);
    };

    /**
     * Performs depth-first search to calculate the number of fish in a connected component.
     * @param {number} row - The starting row index.
     * @param {number} col - The starting column index.
     * @return {number} The total number of fish in the connected component.
     */
    const dfs = function(row, col) {
        let currentFishCount = grid[row][col];
        grid[row][col] = 0;
        const directions = [
            [0, 1],  // right
            [0, -1], // left
            [1, 0],  // down
            [-1, 0]  // up
        ];

        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            if ((inBoundry(newRow, newCol)) && (grid[newRow][newCol] > 0)) {
                currentFishCount += dfs(newRow, newCol);
            }
        }

        return currentFishCount;
    };

    // Iterate through the grid to find the connected components with the maximum fish
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] > 0) {
                maxFish = Math.max(dfs(row, col), maxFish);
            }
        }
    }

    return maxFish;
};