function firstMissingPositive(nums: number[]): number {
    let numsSet = new Set(nums);
    let max = Math.max(...nums);

    for (let i = 1; i <= max + 1; i++) {
        if (!numsSet.has(i)) {
            return i;
        }
    }

    return 1;
};