/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const findThePrefixCommonArray = function(A, B) { // Time = O(n ^ 2) | Space = O(n)
    const prefixCommon = [];
    const map = new Map();
    let commons = 0;

    for (let i = 0; i < A.length; i++) {
        map.set(A[i], (map.get(A[i]) ?? 0) + 1);
        map.set(B[i], (map.get(B[i]) ?? 0) - 1);

        for (const [key, val] of map.entries()) {
            if (val === 0) {
                commons++;
                map.delete(key);
            }
        }
        
        prefixCommon.push(commons);
    }

    return prefixCommon;
};