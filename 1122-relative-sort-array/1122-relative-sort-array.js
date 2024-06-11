/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function(arr1, arr2) { // time : O(n * log(n)), Space : O(n)
    const map1 = new Map(); // {n : freq}
    for (const n of arr1) {
        if (! map1.has(n))
            map1.set(n, []);
        map1.get(n).push(n); 
    }
    
    const map2 = new Map(); // {n : index}
    for (const [i, n] of arr2.entries())
        map2.set(n, i);

    // add and sort Elements that do not appear in arr2 in ascending order.
    const numsNotInArr2 = [];
    for (let [n, nArr] of map1) {
        if (!map2.has(n)) {
            numsNotInArr2.push(...nArr);
            map1.delete(n);
        }
    }
    numsNotInArr2.sort((a, b) => a - b);

    // add and sort intersected elements in arr1
    arr1 = [];
    for (let [n, nArr] of map1) {
            arr1.push(...nArr);
            map1.delete(n);
    }
    arr1.sort((a, b) => map2.get(a) - map2.get(b));

    // merget two sorted arrayes
    arr1.push(...numsNotInArr2);

    return arr1;
};