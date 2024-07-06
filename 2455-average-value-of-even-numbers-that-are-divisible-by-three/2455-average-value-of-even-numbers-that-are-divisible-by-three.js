/**
 * @param {number[]} nums
 * @return {number}
 */
const averageValue = function(nums) { // Time : O(n), Space : (1)
    let sum = 0
      , numOfEvenIntegersDivisiblBy3 = 0;
    
    for (const num of nums) {
        if (num % 6 === 0) {
            sum += num;
            numOfEvenIntegersDivisiblBy3++;
        }
    }

    return Math.floor(sum / Math.max(numOfEvenIntegersDivisiblBy3, 1)); // return avg and handle division by 0
};