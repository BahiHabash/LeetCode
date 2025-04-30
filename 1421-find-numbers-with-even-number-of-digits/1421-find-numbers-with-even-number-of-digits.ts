function findNumbers(nums: number[]): number {
    return nums.reduce((acc, n) => acc + (String(n).length % 2 === 0 ? 1 : 0), 0);
};