function twoSum(nums: number[], target: number): number[] {
    const seen = new Map<number, number>();
    
    for (const [i, num] of nums.entries()) {
        const complement: number = target - num;

        if (seen.has(complement)) {
            return [i, seen.get(complement)];
        }

        seen.set(num, i);
    }
};