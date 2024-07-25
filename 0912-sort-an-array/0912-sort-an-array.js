/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function(nums) { // Count sort, Time : O(n), Space : O(maxNum - minNum + 1)
    // get min and max number in nums
    let [min, max] = [nums[0], nums[0]];
    nums.forEach(num => {
        min = Math.min(num, min);
        max = Math.max(num, max);
    });

    // creat an array with to perform count sort
    const sortedNums = new Array(max - min + 1).fill(0);
    nums.forEach(num => sortedNums[num - min]++);

    // sort the nums array
    let j = 0;    // index to keep track sortedNums array
    for (let i = 0; i < nums.length; i++) {
        nums[i] = j + min;
        sortedNums[j] -= 1;
        while (sortedNums[j] === 0) j++; // skip no longer non-exited numbers
    };

    return nums;
};
