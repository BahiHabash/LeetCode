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
            if (!visited[r][c] && BFS(grid, r, c, grid[r][c], visited, DIRECTIONS)) {
                return true;
            }
        }
    }

    return false;
}

function BFS(grid, r, c, color, visited, DIRECTIONS) {
    const queue = [[r, c, -1, -1]]; // [currentRow, currentCol, parentRow, parentCol]
    visited[r][c] = true;

    while (queue.length) {
        const [currentR, currentC, parentR, parentC] = queue.shift();

        for (const [i, j] of DIRECTIONS) {
            const [newR, newC] = [currentR + i, currentC + j];

            // Skip invalid cells, cells with different colors, or the parent cell
            if (
                !isValid(grid, newR, newC) ||
                grid[newR][newC] !== color ||
                (newR === parentR && newC === parentC)
            ) continue;

            // If the new cell is already visited, a cycle is detected
            if (visited[newR][newC]) return true;

            // Mark the new cell as visited and add it to the queue
            visited[newR][newC] = true;
            queue.push([newR, newC, currentR, currentC]);
        }
    }

    return false;
}

function isValid(grid, r, c) {
    return (r >= 0) && (r < grid.length) &&
        (c >= 0) && (c < grid[0].length);
}