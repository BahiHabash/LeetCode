/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) { // BFS, Time : O(n * m), Space : O(1)
    // Handle edge cases (empty and null grid)
    if ((!grid) || (grid.length === 0) || (grid[0].length === 0))
        return 0;
    
    let islandsCount = 0;
    const m = grid.length;
    const n = grid[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    /** Check if a give cell's indeces in boundry of the grid size
     * @param {number} i row index
     * @param {number} j column index
     * @return {boolean} True if cell is in boundry of grid, False otherwise
     */
    function inBoundry(i, j) {
        return (i >= 0) && (j >= 0) && (i < m) && (j < n);
    }

    /** Perform BFS on the grid
     * @param {number} i starting row index
     * @param {number} j starting column index
     */
    function BFS(i, j) {
        const queue = [[i, j]];
        grid[i][j] = '0';
        while (queue.length) {
            const [r, c] = queue.shift();
            
            for (let [ni, nj] of directions) {
                ni += r, nj += c;
                if (inBoundry(ni, nj) && grid[ni][nj] === '1'){
                    grid[ni][nj] = '0';
                    queue.push([ni, nj]);
                }
            }
        }
    }

    // Iterate over each cell of the grid
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                BFS(i, j);
                islandsCount++;
            }
        }
    }

    return islandsCount;
}
