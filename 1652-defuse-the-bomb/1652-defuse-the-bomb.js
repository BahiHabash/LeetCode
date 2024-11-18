/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = function(code, k) {
    const len = code.length;
    const res = new Array(len).fill(0);

    if (k !== 0) {
        const isKpositive = k > 0;

        for (let i = 0; i < res.length; i++) {
            let sum = 0;

            for (let j = Math.abs(k); j > 0; j--) {
                const idx = isKpositive ? (i + j) % len : (i - j);
                sum += code.at(idx);
            }

            res[i] = sum;
        }
    }
     

    return res;
};