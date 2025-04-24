function countCompleteSubarrays(nums: number[]): number {
    const totalDistinct = new Set(nums).size;
    let count = 0;

    for (let start = 0; start < nums.length; start++) {
        const seen = new Set<number>();
        for (let end = start; end < nums.length; end++) {
            seen.add(nums[end]);
            if (seen.size === totalDistinct) {
                count++;
            }
        }
    }

    return count;
}
