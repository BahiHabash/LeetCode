/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
function firstCompleteIndex (arr, mat) {
    const [m, n] = [mat.length, mat[0].length];
    const valIndecies = new Array(n * m);
    const rows = new Array(m).fill(0);
    const coulmns = new Array(n).fill(0);

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            valIndecies[mat[r][c]] = [r, c];
        }
    }


    for (let i = 0; i < arr.length; i++) {
        const [r, c] = valIndecies[arr[i]];
        
        if (++rows[r] === n) {
            return i;
        }

        if (++coulmns[c] === m) {
            return i;
        }
    }
}