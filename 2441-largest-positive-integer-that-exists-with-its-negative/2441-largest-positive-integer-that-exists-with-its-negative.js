/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxK = function(nums) { // time : O(n), space : O(n)
    let ans = -1;
    const seen = new Set();

    for (const num of nums) {
        if (Math.abs(num) > ans && seen.has(-num))
            ans =Math.abs(num);
        else 
            seen.add(num);
    }

    return ans;
};