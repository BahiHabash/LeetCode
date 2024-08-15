/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function(bills) {
    const myChange = {5: 0, 10: 0, 20: 0};

    for (const bill of bills) {
        myChange[bill]++;

        if (bill !== 5) {
            if (myChange[5] === 0) return false;
            
            myChange[5]--;
            
            if (bill === 20) {
                if (myChange[10]) myChange[10]--;
                else if (myChange[5] >= 2) myChange[5] -= 2;
                else return false;
            }
        } 
    }

    return true;
};