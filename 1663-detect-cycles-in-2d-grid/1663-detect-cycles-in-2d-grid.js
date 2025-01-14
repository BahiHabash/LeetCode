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
            if (!visited[r][c] && BFS(grid, r, c, grid[r][c], { r: -1, c: -1 }, visited, DIRECTIONS)) {
                return true;
            }
        }
    }

    return false;
}

function BFS(grid, r, c, color, parent, visited, DIRECTIONS) {
    const queue = [[r, c, parent]];
    visited[r][c] = true;

    while (queue.length) {
        const [r, c, parent] = queue.shift();

        for (const [i, j] of DIRECTIONS) {
            const [newR, newC] = [r + i, c + j];

            if (
                !isValid(grid, newR, newC) ||
                (newR === parent.r && newC === parent.c) ||
                (grid[newR][newC] !== color) 
            ) continue;

            if (visited[newR][newC]) return true;
            
            visited[newR][newC] = true;
            queue.push([newR, newC, { r, c }]);
        }
    }

    return false;
}

function isValid(grid, r, c) {
    return (r >= 0) && (r < grid.length) &&
        (c >= 0) && (c < grid[0].length);
}