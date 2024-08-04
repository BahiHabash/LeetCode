/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
const canBeEqual = function(target, arr) {
    const freq = new Array(1001).fill(0);

    for (let i = 0; i < arr.length; i++) {
        freq[arr[i]]++;
        freq[target[i]]--;
    }

    return freq.every(n => n === 0);
};  