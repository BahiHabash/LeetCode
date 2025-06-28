function maxSubsequence(nums: number[], k: number): number[] {
    const maxNums: number[] = nums.toSorted((a, b) => b - a).slice(0, k);
    const mapp = new Map<number, number>();

    for (const [i, num] of maxNums.entries()) {
        mapp.set(num, (mapp.get(num) ?? 0) + 1);
    }

    const ans: number[] = [];

    for (const num of nums) {
        if (ans.length === k) {
            break;
        }

        if (mapp.has(num)) {
            mapp.set(num, mapp.get(num) - 1);

            if (mapp.get(num) === 0) {
                mapp.delete(num);
            }

            ans.push(num);
        }
    }

    return ans;
};