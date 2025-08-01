function generate(numRows: number): number[][] {
    const arr: number[][] = [[1]];

    if (numRows === 1) return arr;

    arr.push( [1, 1] );

    if (numRows === 2) return arr;

    for (let i = 2; i < numRows; i++) {
        const currRow: number[] = [1];
        
        for (let i = 1; i < arr.at(-1).length; i++) {
            currRow[i] = arr.at(-1).at(i) + arr.at(-1).at(i - 1);
        }

        currRow.push(1);
        arr.push(currRow);
    }

    return arr;
};