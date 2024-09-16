/**
 * @param {string[]} timePoints
 * @return {number}
 */
const findMinDifference = function(timePoints) {
    const TOTAL_MINUTES_IN_DAY = 24 * 60;
    let sortedtimeInMinutes = new Array(TOTAL_MINUTES_IN_DAY).fill(null);

    // Convert timePoints to minutes and store in the array
    for (const time of timePoints) {
        const [HH, MM] = time.split(':');
        const totalMinutes = parseInt(HH) * 60 + parseInt(MM);
        // If a duplicate time exists, the minimum difference is 0
        if (sortedtimeInMinutes[totalMinutes] !== null) return 0;
        sortedtimeInMinutes[totalMinutes] = totalMinutes;
    }

    // Filter out only the true values (times that exist) and store their indices
    const timesInMinutes = sortedtimeInMinutes.filter(time => time !== null);

    // Calculate the minimum difference between consecutive times
    let minDiffMinutes = TOTAL_MINUTES_IN_DAY - (timesInMinutes.at(-1) - timesInMinutes[0]); // Wrap-around difference

    for (let i = 1; i < timesInMinutes.length; i++) {
        minDiffMinutes = Math.min(minDiffMinutes, timesInMinutes[i] - timesInMinutes[i - 1]);
    }

    return minDiffMinutes;
};
