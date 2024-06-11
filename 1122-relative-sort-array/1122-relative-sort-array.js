/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
// time : O(n + m), Space : O(max number in arr1) | n => size of arr1, m => size of arr2
const relativeSortArray = function(arr1, arr2) {
    const freqArr = new Array(Math.max(...arr1) + 1).fill(0); // {n : freq}

    // fill frequency array for arr1 elements
    for (const n of arr1) 
        freqArr[n]++;
    
    let i = 0;
    // sort the intersected elements between arr1 & arr2 and store it in res
    for (const n of arr2) {
        while (freqArr[n] > 0) {
            arr1[i++] = n;
            freqArr[n]--;
        }
    }

    // sort the non-intersected elements in numsNotInArr2
    for (let n = 0; n < freqArr.length; n++) {
        while (freqArr[n] > 0) {
            arr1[i++] = n;
            freqArr[n]--;
        }
    }

    return arr1;
};