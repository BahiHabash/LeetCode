/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function(bills) {
    const myChange = new Map([[5, 0], [10, 0], [20, 0]]);

    for (const bill of bills) {
        if (bill === 5) {
            myChange.set(5, myChange.get(5) + 1);
        }
        else if (bill === 10) {
            myChange.set(10, myChange.get(10) + 1);
            if (myChange.get(5) < 1) {
                return false;
            }
            myChange.set(5, myChange.get(5) - 1);
        } else {
            myChange.set(20, myChange.get(20) + 1);
            if (myChange.get(5) >= 1 && myChange.get(10) >= 1) {
                myChange.set(5, myChange.get(5) - 1);
                myChange.set(10, myChange.get(10) - 1);
            } else if (myChange.get(5) >= 3) {
                myChange.set(5, myChange.get(5) - 3);
            } else {
                return false;
            }

        }
    }

    return true;
};