/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
const xorQueries = function(arr, queries) {
    const xorMap = new Array(arr.length + 1).fill(0);

    for (const [i, n] of arr.entries()) {
        xorMap[i + 1] = xorMap[i] ^ n;
    }

    return queries.map(
        ([left, right]) => xorMap[left] ^ xorMap[right + 1]
    );
};