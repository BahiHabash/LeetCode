function firstMissingPositive(nums: number[]): number {
    nums.sort((a, b) => a - b);

    let i = 0;
    let ans = 1;

    while ((i < nums.length) && (nums[i] <= 1)) {
        i++;
    }

    while (i < nums.length) {
        let prev = nums[i - 1] ?? 0;
        if (nums[i] - prev > 1) {
            return Math.max(1, prev + 1);
        }

        i++;
    }

    return Math.max(1, nums.at(-1) + 1);
};