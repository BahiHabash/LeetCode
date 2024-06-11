/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
// time : O(m + n * log(n)), Space : O(n + m) | n => size of arr1, m => size of arr2
const relativeSortArray = function(arr1, arr2) { 
    const res = [];
    const numsNotInArr2 = [];
    const map = new Map(); // {n : freq}

    // fill frequency map for arr1 elements
    for (const n of arr1) 
        map.set(n, (map.get(n) ?? 0) + 1);
    
    // sort the intersected elements between arr1 & arr2 and store it in res
    for (const n of arr2) {
        let freq = map.get(n);
        while (freq--)
            res.push(n);
        map.delete(n);
    }

    // store the non-intersected elements in numsNotInArr2
    for (let [n, freq] of map.entries()) {
        while (freq--)
            numsNotInArr2.push(n);
    }

    // sort the non-intersected elements
    numsNotInArr2.sort((a, b) => a - b);

    // append the numsNotInArr2 to the result array
    res.push(...numsNotInArr2);

    return res;
};