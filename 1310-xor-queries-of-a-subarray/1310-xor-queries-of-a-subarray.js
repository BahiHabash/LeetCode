/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
const xorQueries = function(arr, queries) {
    const ans = [];

    for (const [left, right] of queries) {
        let xorRes = arr[left];

        for (let i = left + 1; i <= right; i++) {
            xorRes ^= arr[i];
        }

        ans.push(xorRes);
    }

    return ans;
};