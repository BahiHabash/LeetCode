/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const [m, n] = [matrix.length, matrix[0].length];
    const rows = new Set<number>();
    const columns = new Set<number>();

    // pick the rows and columns to setted with zero
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (matrix[r][c] === 0) {
                rows.add(r);
                columns.add(c);
            }
        }
    }

    // set rows with zero
    for (const row of rows) {
        for (let c = 0; c < n; c++) {
            matrix[row][c] = 0;
        }
    }

    // set columns with zero
    for (const column of columns) {
        for (let r = 0; r < m; r++) {
            matrix[r][column] = 0;
        }
    }
};