/**
 * @param {number[][]} customers
 * @return {number}
 */
const averageWaitingTime = function(customers) { // Time : O(n), Space : O(1)
    let currTime = 0
      , totalWaitingTime = 0;
    
    for (const [arrival, time] of customers) {
        // update total waiting time until now
        totalWaitingTime += (currTime >= arrival) ? (currTime + time - arrival) : (time);
        // update current time after finishing the current order
        currTime = Math.max(arrival, currTime) + time;
    }

    return totalWaitingTime / customers.length;
};