function numberOfArrays(differences: number[], lower: number, upper: number): number {
    let maxDiff: number = -Infinity;
    let maxDiffIdx: number = -1;

    // Get max difference index
    for (let i = 0; i < differences.length; i++) {
        if (Math.abs(differences[i]) > maxDiff) {
            maxDiff = Math.abs(differences[i]);    
            maxDiffIdx = i;
        }
    }

    if ((lower + maxDiff) > upper) return 0;

    // get the Boundries or the Range of numbers that may form the original array
    let num: number = lower;
    let min: number = num;
    let max: number = num;

    // apply the differences to the right of maxDiffIdxc
    for (let i = maxDiffIdx; i < differences.length; i++) {
        num += differences[i];
        min = Math.min(num, min);
        max = Math.max(num, max);
    }

    // reset the initial value at maxDiffIdx
    num = lower;

    // apply the differences to the left of maxDiffIdx
    for (let i = maxDiffIdx; i > 0; i--) {
        num -= differences[i - 1];
        min = Math.min(num, min);
        max = Math.max(num, max);
    }

    const originalNumbersRange: number = max - min;

    return Math.max(
        0, 
        (upper - lower) - originalNumbersRange + 1
    );
}