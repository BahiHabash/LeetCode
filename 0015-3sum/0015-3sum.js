/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) { // Time : O(n*log(n) + n^2), space : O(n)
    nums.sort((a, b) => a - b);
    const triplets = new Set();

    for (let i = 0; i < nums.length; i++) {
        let l = i + 1
          , r = nums.length;

        while (l < r) {
            if (nums[i] + nums[l] + nums[r] === 0) {
                triplets.add(`${nums[i]},${nums[l]},${nums[r]}`);
                l++, r--;
            } else if (nums[i] + nums[l] + nums[r] < 0) {
                l++;
            } else {
                r--;
            }
        }
    }

    return Array.from(triplets).map((triplet) => triplet.split(',').map(num => +num));
};