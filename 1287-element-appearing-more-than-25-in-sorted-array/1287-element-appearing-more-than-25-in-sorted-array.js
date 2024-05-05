/**
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = function(arr) {
    const numsFrequency = new Map()
    for (const num of arr) {
        numsFrequency.set(num, (numsFrequency.get(num) || 0) + 1);
        if (numsFrequency.get(num) * 4 > arr.length)
            return num;
    }
};