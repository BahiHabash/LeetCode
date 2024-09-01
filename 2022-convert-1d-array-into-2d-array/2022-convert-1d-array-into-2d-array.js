/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
const construct2DArray = function(original, m, n) {
    if (m * n !== original.length) return [];

    const new2DArray = [];

    for (let i = 0; i < original.length; i += n) {
        new2DArray.push(original.slice(i, i + n));
    }

    return new2DArray;
};