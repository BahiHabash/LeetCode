function minimumOperations(nums: number[]): number {
    let seen = new Set();

    for (let i = nums.length - 1; i >= 0; i--) {
        if (seen.has(nums[i])) {
            return Math.ceil((i + 1) / 3);
        } else {
            seen.add(nums[i]);
        }
    }

    return 0;
};