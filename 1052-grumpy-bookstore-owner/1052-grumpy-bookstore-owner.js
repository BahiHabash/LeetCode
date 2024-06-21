/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
const maxSatisfied = function(customers, grumpy, minutes) { // Time : O(n), Space : O(n)
    let maxSatisfiedCustomers = 0;
    const notSatisfiedCustomers = [];

    for (const [i, numOfCurrCustomers] of customers.entries()) {
        if (grumpy[i] === 0)
            maxSatisfiedCustomers += numOfCurrCustomers;
        else 
            notSatisfiedCustomers.push([numOfCurrCustomers, i]);
    }

    let left = 0
      , right = 0
      , currConvertedCustomers = 0
      , maxConvertedCustomers = 0;

    while (right < notSatisfiedCustomers.length) {
        currConvertedCustomers += notSatisfiedCustomers[right][0];

        while (minutes < (notSatisfiedCustomers[right][1] - notSatisfiedCustomers[left][1] + 1)) {
            currConvertedCustomers -= notSatisfiedCustomers[left][0];
            left++;
        }

        maxConvertedCustomers = Math.max(currConvertedCustomers, maxConvertedCustomers);
        right++; 
    }

    return maxSatisfiedCustomers + maxConvertedCustomers;
};