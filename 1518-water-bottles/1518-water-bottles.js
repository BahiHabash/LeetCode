/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
const numWaterBottles = function(numBottles, numExchange) {
    let emptyBottles = 0
      , maxNumOfDrinkedBottles = 0;

    while (numBottles || emptyBottles >= numExchange) {
        maxNumOfDrinkedBottles += numBottles;              // Drink bottles
        emptyBottles += numBottles;                        // Bottles become empty
        numBottles = Math.floor(emptyBottles / numExchange); // Exchange bottels
        emptyBottles -= numBottles * numExchange;            // Reduce number of empty bottles
    }

    return maxNumOfDrinkedBottles;
};
