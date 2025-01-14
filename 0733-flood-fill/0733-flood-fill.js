/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
function floodFill(image, sr, sc, color) { // Time: O(N), Spase: O(N)
    const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const visited = new Array(image.length);
    for (let i = 0; i < visited.length; i++) {
        visited[i] = new Array(image[0].length).fill(0);
    }

    DFS(image, sr, sc, image[sr][sc], color, visited, DIRECTIONS);

    return image;
}

function DFS(image, sr, sc, color, newColor, visited, DIRECTIONS) {
    if (visited[sr][sc] || image[sr][sc] !== color) return;

    visited[sr][sc] = true;
    image[sr][sc] = newColor;

    for (const [i, j] of DIRECTIONS) {
        if (isValid(image, sr + i, sc + j, color)) {
            DFS(image, sr + i, sc + j, color, newColor, visited, DIRECTIONS);
        }
    }
}

function isValid(image, r, c, color) {
    return (r >= 0) && (r < image.length) && (c >= 0) && (c < image[0].length) && (image[r][c] === color);
}

