/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
const minBitFlips = function(start, goal) {
    let [binaryStart, binaryGoal] = [start.toString(2), goal.toString(2)];
    const maxLen = Math.max(binaryStart.length, binaryGoal.length);
    [binaryStart, binaryGoal] = [binaryStart.padStart(maxLen, '0'), binaryGoal.padStart(maxLen, '0')];

    let minFilps = 0;
    for (let i = 0; i < maxLen; i++) {
        minFilps += binaryStart[i] !== binaryGoal[i];
    }

    return minFilps;
};