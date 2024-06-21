/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
const maxSatisfied = function(customers, grumpy, minutes) { // Time : O(n), Space : O(1)
    // get already satisfied customers 
    let maxSatisfiedCustomers = 0;

    for (const [i, numOfCurrCustomers] of customers.entries()) {
        maxSatisfiedCustomers += numOfCurrCustomers * (grumpy[i] === 0);
    }

    // get max number of customer can be convert to be satisfied by the secret technique
    let currConvertedCustomers = 0

    for (let i = 0; i < minutes; i++) {
        currConvertedCustomers += customers[i] * (grumpy[i] === 1);
    }

    let maxConvertedCustomers = currConvertedCustomers;

    for (let i = minutes; i < customers.length; i++) {
        currConvertedCustomers += customers[i] * (grumpy[i] === 1);
        currConvertedCustomers -= (customers[i  - minutes] * (grumpy[i - minutes] === 1)) ?? 0;

        maxConvertedCustomers = Math.max(currConvertedCustomers, maxConvertedCustomers);
    }

    maxSatisfiedCustomers += maxConvertedCustomers;

    return maxSatisfiedCustomers;
};