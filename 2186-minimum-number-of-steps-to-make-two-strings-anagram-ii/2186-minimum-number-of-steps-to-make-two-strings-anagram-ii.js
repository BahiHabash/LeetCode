/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const minSteps = function(s, t) { // Time : O(n), Space : O(n)
    let steps = 0;
    // creat a frqeuncy map for s
    const sFreqMap = new Map();
    for (const ch of s) {
        sFreqMap.set(ch, (sFreqMap.get(ch) || 0) + 1);
    }
    // creat a frqeuncy map for t
    const tFreqMap = new Map();
    for (const ch of t) {
        tFreqMap.set(ch, (tFreqMap.get(ch) || 0) + 1);
    }
    // calculate number of each char in s should exited in t
    for (const [ch, times] of sFreqMap) {
        steps += Math.max(0, times - (tFreqMap.get(ch) || 0))
    }
    // calculate number of each char in t should exited in s
    for (const [ch, times] of tFreqMap) {
        steps += Math.max(0, times - (sFreqMap.get(ch) || 0))
    }

    return steps;
};