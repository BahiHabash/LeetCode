/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = function(arr) { // 
    let counter = 0;
    for (const num of arr) {
        if (num % 2 === 0) {
            counter = 0;
        } else {
            if (++counter === 3)
                return true;
        }
    }

    return false;
};