/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function(nums) {
    return sort(nums);
};

// MergeSort
const sort = function(arr = []) {
    const len = arr.length;

    if (len <= 1) return arr; // Base Case

    const mid = Math.floor(len / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    sort(leftArr);
    sort(rightArr);

    return merge(leftArr, rightArr, arr);
};

const merge = function(leftArr, rightArr, arr) {
    let [i, l, r] = [0, 0, 0];
    // merge sort leftArr and rightArr into arr
    while (l < leftArr.length && r < rightArr.length) {
        if (leftArr[l] < rightArr[r]) 
            arr[i++] = leftArr[l++];
        else 
            arr[i++] = rightArr[r++];
    }
    // put the remaing nums of leftArr into arr
    while (l < leftArr.length) {
        arr[i++] = leftArr[l++];
    }
    // put the remaing nums of rightArr into arr
    while (r < rightArr.length) {   
        arr[i++] = rightArr[r++];
    }

    return arr;
};
