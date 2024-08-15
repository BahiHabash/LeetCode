/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function(bills) {
    const myChange = {5: 0, 10: 0, 20: 0};

    for (const bill of bills) {
        myChange[bill]++;
        
        if (bill === 10) {
            if (!myChange[5]) return false;
            myChange[5]--;
        } else if (bill === 20) {
            if (myChange[5] && myChange[10]) {
                myChange[5]--;
                myChange[10]--;
            } else if (myChange[5] >= 3) {
                myChange[5] -= 3;
            } else { 
                return false;
            }
        }
    }

    return true;
};