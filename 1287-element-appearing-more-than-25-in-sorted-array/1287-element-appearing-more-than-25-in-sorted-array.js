/**
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = function(arr) {
    if (arr.length === 1) return arr[0];
    let count = 1;
    for (let i = 0; i < arr.length - 1; i++) {
        if (hasMajority(count, arr)) return arr[i];
        (arr[i] === arr[i + 1]) ? count++ : count = 1;
    }
    return arr.at(-1);
};

const hasMajority = (count, arr) => count * 4 > arr.length;