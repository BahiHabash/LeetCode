/**
 * @param {character[][]} grid
 * @return {boolean}
 */
function containsCycle(grid) {
    const [m, n] = [grid.length, grid[0].length];
    const visited = new Array(m).fill(null).map(_ => new Array(n).fill(false));
    const DIRECTIONS = [[-1, 0], [0, -1], [1, 0], [0, 1]];

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (!visited[r][c] && DFS(grid, r, c, grid[r][c], {r: -1, c: -1}, visited, DIRECTIONS)) {
                return true;
            }
        }
    }

   return false;
}

function DFS(grid, r, c, color, parent, visited, DIRECTIONS) {
    if (!isValid(grid, r, c) || grid[r][c] !== color) return false;

    if (visited[r][c]) return true;

    visited[r][c] = true;
    
    for (const [i, j] of DIRECTIONS) {
        const newR = r + i;
        const newC = c + j;

        if (newR === parent.r && newC === parent.c) continue;

        if (DFS(grid, newR, newC, color, {r, c}, visited, DIRECTIONS)) {
            return true;
        }
    }

    return false;
}

function isValid(grid, r, c) {
    return (r >= 0) && (r < grid.length) &&
           (c >= 0) && (c < grid[0].length);
}