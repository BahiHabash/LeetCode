/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
    const numsFreq = new Map(); // num : freq
    for (const n of nums)
        numsFreq.set(n, (numsFreq.get(n) ?? 0) + 1);
    
    const freqOfNums = new Map(); // freq : [nums]
    for (const [num, freq] of numsFreq.entries()) {
        if (!freqOfNums.has(freq))
            freqOfNums.set(freq, []);
        freqOfNums.get(freq).push(num);
    }
    
    const sortedNumsFreq = [...freqOfNums.entries()].sort((a, b) => b[0] - a[0]); // sort based on frequency 
    const kMostFreqElements = []; // output

    for (const [freq, nums] of sortedNumsFreq) {
        kMostFreqElements.push(...nums);
        if (kMostFreqElements.length >= k) break;
    }

    return kMostFreqElements.slice(0, k);
};