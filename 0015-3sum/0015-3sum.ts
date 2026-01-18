function threeSum(nums: number[]): number[][] {
    const seen = new Set<number>();
    const used = new Set<string>();
    const ans: number[][] = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const target: number = -nums[i] - nums[j];

            if (seen.has(target)) {
                if (nums[i] + nums[j] + target !== 0) continue;

                const trible: number[] = [nums[i], nums[j], target];
                const str: string = trible.sort().join(',');

                if (!used.has(str)) {
                    ans.push(trible);
                }

                used.add(str);
            }
        }

        seen.add(nums[i]);
    }

    return ans;
};