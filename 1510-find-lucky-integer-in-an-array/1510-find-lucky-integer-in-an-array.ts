function findLucky(arr: number[]): number {
    const numFreq: number[] = new Array(500).fill(0);

    for (const num of arr) {
        numFreq[num - 1]++;
    }

    for (let i = numFreq.length - 1; i >= 0; i--) {
        if (numFreq[i] === i + 1) {
            return i + 1;
        }
    }

    return -1;
};