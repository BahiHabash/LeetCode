/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
const canBeEqual = function(target, arr) {
    arr.sort((a, b) => a - b);
    target.sort((a, b) => a - b);
    return target.every((n, i) => arr[i] === n);
};