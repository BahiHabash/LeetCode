function numEquivDominoPairs(dominoes: number[][]): number {
    let pairsFreq: { [key: string]: number } = {};

    for (const [a, b] of dominoes) {
        const pair: string = (a < b) ? `${a},${b}` : `${b},${a}`;
    
        pairsFreq[pair] ||= 0;
        pairsFreq[pair]++;
    }

    let numOfPairs: number = 0;

    for (const freq of Object.values(pairsFreq)) {
        if (freq > 1)
            numOfPairs += (freq * (freq - 1)) / 2;
    }

    return numOfPairs;
};