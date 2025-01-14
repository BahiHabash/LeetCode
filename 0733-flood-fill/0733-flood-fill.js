/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
function floodFill(image, sr, sc, newColor) {
    const color = image[sr][sc];
    const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    if (image[sr][sc] === newColor) return image;

    function DFS(r, c) {   
        image[r][c] = newColor;

        for (const [i, j] of DIRECTIONS) {
            if (isValid(r+i, c+j)) 
                DFS(r+i, c+j);
        }
    }

    function isValid(r, c) {
        return (r >= 0) && (r < image.length) &&
               (c >= 0) && (c < image[0].length) &&
               (image[r][c] === color)
    }

    DFS(sr, sc);

    return image;
}



