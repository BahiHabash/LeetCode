/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
const spiralMatrixIII = function(rows, cols, rStart, cStart) {
    const vistedCells = [[rStart, cStart]];
    let [r, c] = [rStart, cStart];
    const numOfCells = rows * cols;
    let numOfVisitedCells = 1;
    let currMoves = 1;

    function withinBoundries(r, c) {
        return r >= 0 && c >= 0 && r < rows && c < cols;
    }

    while (numOfVisitedCells < numOfCells) {
        // move to right
        for (let j = 1; j <= currMoves; j++) {
            if (withinBoundries(r, c + j)) {
                vistedCells.push([r, c + j]);
                numOfVisitedCells++;
            }
        }
        c += currMoves;

        // move to down
        for (let i = 1; i <= currMoves; i++) {
            if (withinBoundries(r + i, c)) {
                vistedCells.push([r + i, c]);
                numOfVisitedCells++;
            }
        }
        r += currMoves;

        currMoves++;

        // move to left
        for (let j = 1; j <= currMoves; j++) {
            if (withinBoundries(r, c - j)) {
                vistedCells.push([r, c - j]);
                numOfVisitedCells++;
            }
        }
        c -= currMoves;

        // move to up
        for (let i = 1; i <= currMoves; i++) {
            if (withinBoundries(r - i, c)) {
                vistedCells.push([r - i, c]);
                numOfVisitedCells++;
            }
        }
        r -= currMoves;

        currMoves++;
    }   

    return vistedCells;
};