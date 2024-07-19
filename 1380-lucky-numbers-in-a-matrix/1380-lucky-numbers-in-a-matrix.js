/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const luckyNumbers  = function(matrix) { // Time : O(m * n), Space : O(m + n)
    // get length of row (m) and length of columns(n)
    const [m, n] = [ matrix.length, matrix[0].length];

    const minNumOfRows = new Array(m).fill(Infinity);
    const maxNumOfColumns = new Array(n).fill(-Infinity);
    // get min number of each rows and max number of each columns
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            minNumOfRows[i] = Math.min(matrix[i][j], minNumOfRows[i]);
            maxNumOfColumns[j] = Math.max(matrix[i][j], maxNumOfColumns[j]);
        }
    }

    const luckyNums = [];
    // get lucky numbers
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (minNumOfRows[i] === maxNumOfColumns[j]) { //is the (min num in its row) and (max in its column)
                luckyNums.push(matrix[i][j]);
            }
        }
    }

    return luckyNums;
};

