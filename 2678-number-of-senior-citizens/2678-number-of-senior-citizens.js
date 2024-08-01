/**
 * @param {string[]} details
 * @return {number}
 */
const countSeniors = function(details) { // Time : O(n), space : O(1)
    let numOfPassngersOlderThan60 = 0;

    for (const passengerDetails of details) {
        const age = passengerDetails.slice(-4, -2);
        numOfPassngersOlderThan60 += age > 60;
    }

    return numOfPassngersOlderThan60;
};