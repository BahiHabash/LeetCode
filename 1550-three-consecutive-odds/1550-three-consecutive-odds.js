/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = function(arr) { // 
    let counter = 0;
    
    for (const num of arr) {
        counter += (num % 2 !== 0);
        counter *= (num % 2 !== 0);
        if (counter === 3) return true;
    }

    return false;
};