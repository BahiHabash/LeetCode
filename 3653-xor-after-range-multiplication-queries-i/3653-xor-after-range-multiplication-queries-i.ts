function xorAfterQueries(nums: number[], queries: number[][]): number {
    queries.forEach(([l, r, k, v]) => {
        for (let idx = l; idx <= r; idx += k) {
            nums[idx] = (nums[idx] * v) % (1e9 + 7);
        }
    });

    return nums.reduce((acc, num) => acc ^ num, 0);
};