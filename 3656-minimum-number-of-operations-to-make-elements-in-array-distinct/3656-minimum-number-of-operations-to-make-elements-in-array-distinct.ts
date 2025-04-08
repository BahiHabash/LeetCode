function minimumOperations(nums: number[]): number {
    let numOfDublicatedNums: number = 0;
    const numsFreq: number[] = new Array(101).fill(0);

    for (let i = 0; i < nums.length; i++) {
        numsFreq[nums[i]]++;
        if (numsFreq[nums[i]] === 2) numOfDublicatedNums++;
    }
    
    
    let minOperations: number = 0;

    for (let i = 0; i < nums.length; i += 3) {
        if (numOfDublicatedNums === 0) break;

        for (let j = i; j < Math.min(nums.length, i + 3); j++) {
            numsFreq[nums[j]]--;
            if (numsFreq[nums[j]] === 1) numOfDublicatedNums--;
        }

        minOperations++;
    }

    return minOperations;
};