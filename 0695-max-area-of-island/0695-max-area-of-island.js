/** Get the maximum area of an island within a grid
 * @param {number[][]} grid
 * @return {number} Maximum area of an island in the grid
 */
const maxAreaOfIsland = function(grid) { // Time : O(n * m) | Space : O(1)
    let maxIslandArea = 0;
    const m = grid.length;
    const n = grid[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    /** Check if the cell's indices within the grid's boundies
     * @param {number} row      row index
     * @param {number} column   column index
     * @return {boolean} True if cell's indices in the grid boundries
     */
    const isInBoundry = function(row, column) {
        return (row >= 0) && (column >= 0) && (row < m) && (column < n);
    }

    /** Perform DFS on the grid
     * @param {number} r   strarting row index
     * @param {number} c   starting column index
     * @return {number} Area of current block of (1)s (island)
     */
    const DFS = function(r, c) {
        let currIslandArea = 1;
        grid[r][c] = 0;
        for (let [nr, nc] of directions) {
            nr += r, nc += c;
            if (isInBoundry(nr, nc) && grid[nr][nc] === 1) {
                currIslandArea += DFS(nr, nc);
            }
        }
        return currIslandArea;
    }
    
    // Iterate over the grid's cells
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1)
                maxIslandArea = Math.max(DFS(r, c), maxIslandArea);
        }
    }

    return maxIslandArea;
};