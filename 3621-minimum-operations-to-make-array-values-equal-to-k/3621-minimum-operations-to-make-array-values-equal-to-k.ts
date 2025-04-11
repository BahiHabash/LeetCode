function minOperations(nums: number[], k: number): number {
    const numsSet: Set<number> = new Set();
    let min: number = Infinity;
    let max: number = -Infinity;

    for (const num of nums) {
        numsSet.add(num);   
        min = Math.min(num, min);
        max = Math.min(num, max);
    }

    if (k > min) return -1;

    return numsSet.size - (numsSet.has(k) ? 1 : 0);
};