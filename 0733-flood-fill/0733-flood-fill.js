/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
function floodFill(image, sr, sc, color) { // Time: O(N), Spase: O(1)
    const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const visited = new Set();
    const oldColor = image[sr][sc];

    function DFS(image, sr, sc) {
        const hashIdx = sr * image[0].length + sc;
        
        if (visited.has(hashIdx) || image[sr][sc] !== oldColor) return;

        visited.add(hashIdx);

        image[sr][sc] = color;

        for (const [i, j] of DIRECTIONS)
            if ( isValid(image, sr + i, sc + j) )
                DFS(image, sr + i, sc + j);

    }

    function isValid(image, r, c) {
        return (r >= 0) && (r < image.length) &&
               (c >= 0) && (c < image[0].length) &&
               (image[r][c] === oldColor);
    }

    DFS(image, sr, sc);

    return image;
}



