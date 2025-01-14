/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
function floodFill(image, sr, sc, color) { // Time: O(N), Spase: O(N)
    // Generate Directions to move to
    const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    // Create a visited Array
    const visited = new Array(image.length);
    for (let i = 0; i < visited.length; i++) {
        visited[i] = new Array(image[0].length).fill(0);
    }

    function DFS(image, sr, sc) {
        if (visited[sr][sc]) return;

        visited[sr][sc] = true;

        for (const [i, j] of DIRECTIONS)
            if ( isValid(image, sr + i, sc + j, image[sr][sc]) )
                DFS(image, sr + i, sc + j);

        image[sr][sc] = color;
    }

    function isValid(image, r, c, oldColor) {
        return (r >= 0) && (r < image.length) &&
               (c >= 0) && (c < image[0].length) &&
               (image[r][c] === oldColor);
    }

    DFS(image, sr, sc);

    return image;
}



