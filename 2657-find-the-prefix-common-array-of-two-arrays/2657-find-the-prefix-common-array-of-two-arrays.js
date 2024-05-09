/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const findThePrefixCommonArray = function(A, B) { // Time : O(n ^ 2) | Space : O(n)
    const Aset = new Set();
    const Bset = new Set();
    const prefixCommon = [];

    for (let i = 0; i < A.length; i++) {
        Aset.add(A[i]);
        Bset.add(B[i]);
        let commons = 0;
        for (const n of Aset) {
            commons += Bset.has(n);
        }
        prefixCommon.push(commons);
    }

    return prefixCommon;
};