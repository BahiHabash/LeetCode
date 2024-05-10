/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
const kthSmallestPrimeFraction = function(arr, k) { // Time : O(n ^ 2) | Space : O(n ^ 2)
    const fractions = [];
    for(let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j > i; j--) {
            fractions.push([arr[i] / arr[j], arr[i], arr[j]]);
        }
    }
    fractions.sort((a, b) => a[0] - b[0]);
    return [fractions[k - 1][1], fractions[k - 1][2]];
};