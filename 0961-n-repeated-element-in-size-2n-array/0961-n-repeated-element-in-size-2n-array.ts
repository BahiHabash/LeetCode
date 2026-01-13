function repeatedNTimes(nums: number[]): number {
    const numSeen = new Set<number>();

    for (const num of nums) {
        if (numSeen.has(num)) {
            return num;
        } else {
            numSeen.add(num);
        }
    }
};