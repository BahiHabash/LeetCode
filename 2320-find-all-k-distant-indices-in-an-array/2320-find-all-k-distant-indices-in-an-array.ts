function findKDistantIndices(nums: number[], key: number, k: number): number[] {
    const indices: number[] = [];

    for (const [i, n] of nums.entries()) {
        if (n === key) {
            indices.push(i);
        }
    }

    const ans: number[] = [];

    for (const [i, n] of nums.entries()) {
        for (const idx of indices) {
            if (Math.abs(i - idx) <= k) {
                ans.push(i);
                break;
            }
        }
    }

    return ans.sort((a, b) => a - b);
};