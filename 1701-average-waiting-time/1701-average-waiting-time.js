/**
 * @param {number[][]} customers
 * @return {number}
 */
const averageWaitingTime = function(customers) { // Time : O(n), Space : O(1)
    const customersNum = customers.length;
    let [currTime, totalWaitingTime] = customers[0];
    currTime += totalWaitingTime;
    
    for (let i = 1; i < customersNum; i++) {
        const [arrival, time] = customers[i];

        if (currTime <= arrival) {
            totalWaitingTime += time;
        } else {
            totalWaitingTime += currTime + time - arrival;
        }

        currTime = Math.max(arrival, currTime) + time;
    }

    return totalWaitingTime / customersNum;
};