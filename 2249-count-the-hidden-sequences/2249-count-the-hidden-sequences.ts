function numberOfArrays(differences: number[], lower: number, upper: number): number {
    let currSumDiff: number = 0;
    let min: number = 0;
    let max: number = 0;

    for (const diff of differences) {
        currSumDiff += diff;
        min = Math.min(min, currSumDiff);
        max = Math.max(max, currSumDiff);
    }

    return Math.max(
        0, 
        (upper - lower) - ( max - min) + 1
    );
}