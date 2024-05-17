/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
    const visited = new Array(300).fill(null).map(() => new Array(300).fill(false));
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;

    /**
     * @param {number} i
     * @param {number} j
     * @return {boolean}
     */
    function inBoundry(i, j) {
        return (i >= 0) && (j >= 0) && (i < m) && (j < n);
    }

    /**
     * @param {number} i
     * @param {number} j
     */
    function dfs(i, j) {
        visited[i][j] = true;
        const directions = [
            [0, 1],  // right
            [0, -1], // left
            [1, 0],  // up
            [-1, 0], // down
        ]

        for(let [ni, nj] of directions) {
            ni += i;
            nj += j;
            if (inBoundry(ni, nj) && !visited[ni][nj] && grid[ni][nj] === '1')
                dfs(ni, nj);
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j] && grid[i][j] === '1') {
                dfs(i, j);
                count++;
            }
        }
    }

    return count;
}
