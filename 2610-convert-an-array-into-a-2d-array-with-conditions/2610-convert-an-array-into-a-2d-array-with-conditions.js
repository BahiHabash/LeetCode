/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findMatrix = function(nums) { // Time: O(n), Space: O(n)
    // creat frequency map for nums' items
    const numsFreq = new Map();
    for (const num of nums) 
        numsFreq.set(num, (numsFreq.get(num) || 0) + 1);
    
    const arr2D = [];
    while (numsFreq.size) {
        const row = [];
        // fill each row with distinct items
        for (const [key, times] of numsFreq.entries()) {
            row.push(key);
            numsFreq.set(key, times - 1);   // reduce freq of the item from numsFreq map 
            if (times === 1)                // delete it if there no more freq existed
                numsFreq.delete(key);
        }
        arr2D.push(row);
    }
    
    return arr2D;
};