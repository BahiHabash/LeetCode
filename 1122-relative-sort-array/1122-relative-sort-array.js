/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
// time : O(n * log(n)), Space : O(n + m) | n => size of arr1, m => size of arr2
const relativeSortArray = function(arr1, arr2) { 
    const map2 = new Map(); // {n : index}
    for (const [i, n] of arr2.entries())
        map2.set(n, i);

    // sort arr1's elements that exited in arr2 and move the element not intersected to the end
    arr1.sort(function (a, b) {
        return (map2.get(a) ?? (Infinity - a)) - (map2.get(b) ?? (Infinity - b));
    });

    // get the starting index of elements that doesn't exited in arr2
    let i = arr1.length;
    while (! map2.has(arr1[i - 1])) i--;
    
    // get and sort all elements that doesn't exited in arr2
    const numsNotInArr2 = arr1.splice(i).sort((a, b) => a - b);

    // append numsNotInArr2 to arr1
    arr1.push(...numsNotInArr2);

    return arr1;
};