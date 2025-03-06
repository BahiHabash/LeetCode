/**
 * @param {number[][]} grid
 * @return {number}
 */
function equalPairs(grid) {
    const [rowsLen, colsLen] = [grid.length, grid[0].length];
    const colsMap = new Map();
    const rowsMap = new Map();

    // store rows in the rossMap
    for (const row of grid) {
        let key = row.join(',');
        rowsMap.set(key, (rowsMap.get(key) ?? 0) + 1);
    }

    // store columns in the colsMap
    for (let c = 0; c < colsLen; c++) {
        let key = '';

        for (let r = 0; r < rowsLen; r++) {
            key += grid[r][c] + ((r + 1 < rowsLen) ? ',' : '');
        }

        colsMap.set(key, (colsMap.get(key) ?? 0) + 1);
    }
    
    // count the number of pairs (ri, cj) such that row ri and column cj are equal
    let pairsNum = 0;

    for (const [key, rowFreq] of rowsMap.entries()) {
        pairsNum += rowFreq * (colsMap.get(key) ?? 0);
    }

    return pairsNum;
}