/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const findThePrefixCommonArray = function(A, B) { // Time < O(n ^ 2) | Space < O(n)
    const Aset = new Set();
    const Bset = new Set();
    const prefixCommon = [];
    let commons = 0;

    for (let i = 0; i < A.length; i++) {
        Aset.add(A[i]);
        Bset.add(B[i]);
        for (const n of Aset) {
            if (Bset.has(n)) {
                commons++;
                Aset.delete(n);
                Bset.delete(n);
            }
        }
        prefixCommon.push(commons);
    }

    return prefixCommon;
};