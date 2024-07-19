/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const luckyNumbers  = function(matrix) {
    const [m, n] =[ matrix.length, matrix[0].length];
    
    const minNumOfRows = [];
    for (const row of matrix) {
        minNumOfRows.push( row.reduce((acc, n) => Math.min(acc, n), Infinity) );
    }

    const maxNumOfColumns = [];
    for (let i = 0; i < n; i++) {
        let maxNumOfCurrColumn = -Infinity;
        for (let j = 0; j < m; j++) {
            maxNumOfCurrColumn = Math.max(matrix[j][i], maxNumOfCurrColumn);
        }
        maxNumOfColumns.push(maxNumOfCurrColumn);
    }

    const luckyNums = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if ((matrix[i][j] === minNumOfRows[i]) && (matrix[i][j] === maxNumOfColumns[j])) {
                luckyNums.push(matrix[i][j]);
            }
        }
    }

    return luckyNums;
};