/**
 * @param {string[]} timePoints
 * @return {number}
 */
const findMinDifference = function(timePoints) { // Time : O(n * log(n)), Space : O(n)

    const sortedtimeInMinutes = timePoints.map(time => {
        const [HH, MM] = time.split(':');
        return HH * 60 + +MM;                   // convert time into minutes
    }).sort((t1, t2) => t1 - t2);               // sort time asc

    const TOTAL_MINUTES_IN_DAY = 24 * 60;
    let minDiffMinutes = TOTAL_MINUTES_IN_DAY - (
        sortedtimeInMinutes.at(-1) - sortedtimeInMinutes.at(0)
    );
    
    for (let i = 1; i < sortedtimeInMinutes.length; i++) {
        minDiffMinutes = Math.min(
            minDiffMinutes,
            sortedtimeInMinutes[i] - sortedtimeInMinutes[i - 1]
        );
    }

    return minDiffMinutes;
};