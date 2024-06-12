/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {  // Time : O(n), Space : O(1)
    const colorFreq = new Array(3).fill(0);
    for (const color of nums)    // fill the colorFreq array
        colorFreq[color]++;
    
    let i = 0;                  // store and sort the color in-plece
    for (let [color, freq] of colorFreq.entries())
        while (freq--)
            nums[i++] = color;
};