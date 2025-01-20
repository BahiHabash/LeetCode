/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
function firstCompleteIndex (arr, mat) {
    const [m, n] = [mat.length, mat[0].length];
    const valIndecies = new Map();

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            valIndecies.set(mat[r][c], { r , c });
        }
    }

    const rows = new Array(m).fill(n);
    const coulmns = new Array(n).fill(m);

    for (let i = 0; i < arr.length; i++) {
        const {r, c} = valIndecies.get(arr[i]);
        
        if (--rows[r] === 0) {
            return i;
        }

        if (--coulmns[c] === 0) {
            return i;
        }
    }
}