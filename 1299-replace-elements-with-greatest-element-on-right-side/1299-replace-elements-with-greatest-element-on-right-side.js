/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function(arr) {
    let [maxRightNum, currNum] = [-1, null];
    
    for (let i = arr.length - 1; i >= 0; i--) {
        currNum = arr[i];
        arr[i] = maxRightNum;
        maxRightNum = Math.max(currNum, maxRightNum);
    }

    return arr;
};