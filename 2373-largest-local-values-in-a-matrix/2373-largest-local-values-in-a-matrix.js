/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
const largestLocal = function(grid) {
    const len = grid.length;
    const maxLocal = new Array(len - 2).fill().map(() => new Array(len - 2).fill(0));
    for (let i = 0; i < len - 2; i++) {
        for (let j = 0; j < len - 2; j++) {
            maxLocal[i][j] = largestValueInMatrix(grid, i, j, 3);
        }
    }
    return maxLocal;
};

/**
 * @param {number[][]} grid
 * @param {number} row 
 * @param {number} column
 * @param {number} size size of the subgrid
 * @return {number} max number in the subgrid
 */
const largestValueInMatrix = function(grid, row, column, size) {
    let maxNum = 0;
    for (let i = row; i < row + size; i++) {
        for (let j = column; j < column + size; j++) {
            maxNum = Math.max(grid[i][j], maxNum);
        }
    }
    return maxNum;
}