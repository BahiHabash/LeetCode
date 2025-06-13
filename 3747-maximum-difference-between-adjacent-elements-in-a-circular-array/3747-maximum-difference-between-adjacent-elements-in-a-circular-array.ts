function maxAdjacentDistance(nums: number[]): number {
    let maxAbsDiff: number = Math.abs(nums.at(0) - nums.at(-1));

    for (let i = 1; i < nums.length; i++) {
        const currAbsDiff: number = Math.abs(nums[i] - nums[i - 1]);
        maxAbsDiff = Math.max(currAbsDiff, maxAbsDiff);
    }

    return maxAbsDiff;
};