/**
 * @param {number[][]} grid
 * @return {number}
 */
const findMaxFish = function(grid) {
    let maxFish = 0;
    const m = grid.length;
    const n = grid[0].length;
    const visited = new Array(m).fill(null).map(() => new Array(n).fill(false));

    /**
     * @param {number} r
     * @param {number} c
     * @param {boolean}
     */
    const inBoundry = function(r, c) {
        return (r >= 0) && (c >= 0) && (r < m) && (c < n);
    }


    /**
     * @param {number} r
     * @param {number} c
     * @return {number} catched fish
     */
    const dfs = function(r, c) {
        visited[r][c] = true;
        let currFish = grid[r][c];
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        for (let [nr, nc] of directions) {
            nr += r;
            nc += c;
            if ((inBoundry(nr, nc)) && (grid[nr][nc] > 0) && (!visited[nr][nc])) {
                currFish += dfs(nr, nc);
            }
        }
        return currFish;
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if ((grid[r][c] > 0) && (!visited[r][c]))
                maxFish = Math.max(dfs(r, c), maxFish);
        }
    }

    return maxFish;
};