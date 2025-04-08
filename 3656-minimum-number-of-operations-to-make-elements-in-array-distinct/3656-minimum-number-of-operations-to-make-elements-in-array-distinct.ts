function minimumOperations(nums: number[]): number {
    let numOfDublicatedNums: number = 0;
    const numsFreq = new Map();

    for (let i = 0; i < nums.length; i++) {
        numsFreq.set(nums[i], (numsFreq.get(nums[i]) ?? 0) + 1);
        if (numsFreq.get(nums[i]) === 2) numOfDublicatedNums++;
    }
    
    let minOperations = 0;

    while (numOfDublicatedNums && nums.length) {
        for (let i = 0; i < 3; i++) {
            const num: number = nums.shift();

            numsFreq.set(num, numsFreq.get(num) - 1);
            if (numsFreq.get(num) === 1) numOfDublicatedNums--;
        }

        minOperations++;
    }

    return minOperations;
};