function maximumDifference(nums: number[]): number {
    let minNum: number = Infinity;
    let maxDiff: number = 0;
    
    for (const num of nums) {
        minNum = Math.min(num, minNum);
        maxDiff = Math.max(num - minNum, maxDiff);
    }

    return (maxDiff > 0) ? maxDiff : -1;
};