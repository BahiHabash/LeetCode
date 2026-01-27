function twoSum(nums: number[], target: number): number[] {
    const numIdx = new Map<number, number>();

    for (const [idx, num] of nums.entries()) {
        const complement: number = target - num;

        if (numIdx.has(complement)) {
            return [numIdx.get(complement), idx];
        } else {
            numIdx.set(num, idx);
        }
    }
};