/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = function(nums) { // Time : O(n), Space : O(1)
    const elemsAppearOnce = [];
    
    for (let i = 0; i < nums.length; i++) {
        let isDuplicated = false;
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] === nums[j]){
                isDuplicated = true;
                break;
            }
        }
        if (! isDuplicated)
            elemsAppearOnce.push(nums[i]);
    }
    
    return elemsAppearOnce;    
};