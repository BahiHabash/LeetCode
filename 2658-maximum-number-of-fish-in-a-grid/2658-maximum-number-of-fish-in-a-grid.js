/**
 * @param {number[][]} grid
 * @return {number} maximum number of catched fish
 */
const findMaxFish = function(grid) { //BFS, Time : O(n * m), Space : O(1)
    // Handle edge cases (empty and null grid)
    if (!grid || !grid.length || !grid[0].length)
        return 0;

    let maxCatchedFish = 0;
    const m = grid.length;
    const n = grid[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    /** Check if the cell's indecies is in grid boundires
     * @param {number} row    row index
     * @param {number} column coulmn index
     * @return {boolean} True if cell's indeces within grid boundries, False otherwise
     */
    const isInBoundry = function(row, column) {
        return row >= 0 && column >= 0 && row < m && column < n;
    }

    /** Perform BFS on the grid
     * @param {number} r starting index of rows
     * @param {number} c starting index of columns
     * @return {number} count of fish in current island
     */
    const BFS = function(r, c) {
        const queue = [[r, c]];
        let fishCount = grid[r][c];
        grid[r][c] = 0;
        
        while (queue.length) {
            const [row, column] = queue.shift();
            for (let [nr, nc] of directions) {
                nr += row, nc += column;
                if (isInBoundry(nr, nc) && grid[nr][nc] > 0){
                    fishCount += grid[nr][nc];
                    queue.push([nr, nc]);
                    grid[nr][nc] = 0;
                }
            }
        }

        return fishCount;
    }
    
    // Iterate over grid cells
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] > 0) {
                maxCatchedFish = Math.max(BFS(r, c), maxCatchedFish);
            }
        }
    }

    return maxCatchedFish;
};