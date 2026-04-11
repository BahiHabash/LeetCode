function minimumDistance(nums: number[]): number {
    let minDistance = Infinity;
    const numFreq: Record<number, number[]> = {};

    // group all indices of each num together
    for (const [i, num] of nums.entries()) {
        numFreq[num] ??= [];
        numFreq[num].push(i);
    }

    // calc the minimum distance ever
    for (const indices of Object.values(numFreq)) {
        if (indices.length < 3) continue;

        minDistance = Math.min(minDistance, calcMinDistance(indices));
    }

    return minDistance === Infinity ? -1 : minDistance;
};

/**
 * calc the minimum distance from a given indices
 */
function calcMinDistance(indices: number[]): number {
    let minDistance = Infinity;

    for (let i = 0; i < indices.length - 2; i++) {
        const currDistance = 2 * (indices[i + 2] - indices[i]);
        minDistance = Math.min(currDistance, minDistance);
    } 
    
    return minDistance;
};