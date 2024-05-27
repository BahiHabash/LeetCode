/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = function(nums) { // Time : O(n ^ 2), Space : O(1)
    let specialNum = -1;
    
    for(let i = 1; i <= nums.length; i++) {
        let x = i;
        let numOfNumsGreaterThanX = 0;
        
        for (let j = 0; j < nums.length; j++) {
            numOfNumsGreaterThanX += x <= nums[j];
        }
        
        if (x === numOfNumsGreaterThanX)
            specialNum = x;
    }
    
    return specialNum;
};