/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
function floodFill(image, sr, sc, color) {
    const visited = new Set();
    const oldColor = image[sr][sc];
    const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    function isValid(image, r, c) {
        return (r >= 0) && (r < image.length) &&
               (c >= 0) && (c < image[0].length) &&
               (image[r][c] === oldColor) && (!visited.has(r * image[0].length + c));
    }

    const queue = [[sr, sc]];

    while (queue.length) {
        const [r, c] = queue.shift();
        image[r][c] = color;

        for (const [i, j] of DIRECTIONS){ 
            if ( isValid(image, r+i, c+j) ){
                queue.push([r+i, c+j]);
                visited.add(r * image[0].length + c);
            }
        }
    }

    return image;
}



