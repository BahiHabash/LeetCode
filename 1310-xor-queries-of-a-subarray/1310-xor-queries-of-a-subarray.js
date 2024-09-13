/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
const xorQueries = function(arr, queries) {
    return queries.map(([left, right]) => {
        let queryResult = 0;
        while (left <= right) queryResult ^= arr[left++];
        return queryResult;
    });
};