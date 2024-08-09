/**
 * @param {number[][]} grid
 * @return {number}
 */
const numMagicSquaresInside = function(grid) {
    let numOfMagicSquares = 0;

    for (let i = 0; i < grid.length - 2; i++) {
        for (let j = 0; j < grid[0].length - 2; j++) {
            numOfMagicSquares += isMagicSquare(grid, i, j);
        }
    }

    return numOfMagicSquares;
};

const isMagicSquare = function(grid, r, c) {
    const seen = new Array(10).fill(false);
    let leftDiagonal = grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2];

    // Check rows' sum
    for (let i = 0; i < 3; i++) {
        let rowSum = 0;
        for (let j = 0; j < 3; j++) {
            const currNum = grid[r + i][c + j];

            if (currNum < 1 || currNum > 9 || seen[currNum]) {
                return false;
            } else {
                rowSum += currNum;
                seen[currNum] = true; 
            }
        }
        if (rowSum !== leftDiagonal) return false;
    }

    // Check columns' sum
    for (let i = 0; i < 3; i++) {
        let colSum = 0;
        for (let j = 0; j < 3; j++) {
            colSum += grid[r + j][c + i];
        }
        if (colSum !== leftDiagonal) return false;
    }

    // Check right diagonal' sum
    if (
        (grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2]) !== leftDiagonal
    ) return false;

    return true;
};