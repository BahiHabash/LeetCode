/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function(arr) {
    const seen = new Set();

    for (const num of arr) {
        if (seen.has(num * 2) || seen.has(num / 2)) {
            return true;
        }

        seen.add(num);
    }

    return false;
};