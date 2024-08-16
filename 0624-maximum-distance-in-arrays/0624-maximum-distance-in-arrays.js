/**
 * @param {number[][]} arrays
 * @return {number}
 */
const maxDistance = function(arrays) { // Time : O(M), Space : O(1)
    let [min, max, minIdx, maxIdx] = [Infinity, -Infinity, -1, -1];

    for (const [i, array] of arrays.entries()) {
        if (array.at(0) < min) {
            min = array.at(0);
            minIdx = i;
        }
        if (array.at(-1) > max) {
            max = array.at(-1);
            maxIdx = i;
        }
    }

    if (minIdx !== maxIdx) { // if min and max not in the same array
        return Math.abs(max - min);
    }

    const max2 = arrays.reduce((acc, array, i) => 
        i === maxIdx ? acc : Math.max(acc, array.at(-1))
    , -Infinity);

    const min2 = arrays.reduce((acc, array, i) => 
        i === minIdx ? acc : Math.min(acc, array.at(0))
    , Infinity);
    
    return Math.max(
        Math.abs(max2 - min),
        Math.abs(max - min2)
    );
};