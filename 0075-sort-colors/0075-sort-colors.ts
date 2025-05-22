/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    const colorFreq: number[] = [0, 0, 0];

    for (const num of nums) {
        colorFreq[num]++;
    }

    let idx = 0;
    for (let [color, freq] of colorFreq.entries())
        while (freq--) 
            nums[idx++] = color;
};