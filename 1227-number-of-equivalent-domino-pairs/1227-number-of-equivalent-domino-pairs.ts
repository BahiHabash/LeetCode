function numEquivDominoPairs(dominoes: number[][]): number {
    let pairsFreq: { [key: string]: number } = {};

    for (const [a, b] of dominoes) {
        const pair: string = `${a},${b}`;

        if ( pairsFreq[pair] ) {
            pairsFreq[pair]++;
        } else {
            const revrsePair: string = `${b},${a}`;
            pairsFreq[revrsePair] ||= 0;
            pairsFreq[revrsePair]++;
        }
    }

    let numOfPairs: number = 0;

    for (const freq of Object.values(pairsFreq)) {
        numOfPairs += (freq * (freq - 1)) / 2;
    }

    return numOfPairs;
};