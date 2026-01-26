function minimumAbsDifference(arr: number[]): number[][] {
    arr.sort((a, b) => a - b);

    // get the minimum absolute difference of any two elements
    let minDiff: number = Infinity;

    for (let i = 1; i < arr.length; i++) {
        minDiff = Math.min(arr[i] - arr[i - 1], minDiff);
    }

    // pick all pairs which their absolute difference = minDiff
    const pairs: number[][] = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] === minDiff) {
            pairs.push([arr[i - 1], arr[i]]);
        }
    }

    return pairs;
};