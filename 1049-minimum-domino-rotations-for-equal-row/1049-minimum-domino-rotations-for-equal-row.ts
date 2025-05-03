function minDominoRotations(tops: number[], bottoms: number[]): number {
    const n: number = tops.length;
    const mirror: [number, number] = [0, 0]; // [num, freq]
    const topsNumFreq = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    const bottomsNumFreq = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

    for (let i = 0; i < n; i++) {
        if (tops[i] === bottoms[i]) {
            if (mirror[0] && (mirror[0] !== tops[i])) return -1;

            mirror[0] = tops[i];
            mirror[1]++;
        } else {
            topsNumFreq[tops[i]]++;
            bottomsNumFreq[bottoms[i]]++;
        }
    }
    
    for (let i = 1; i <= 6; i++) {
        let freq: number = topsNumFreq[i] + bottomsNumFreq[i];
        if (i === mirror[0]) freq += mirror[1];

        if (freq >= n) return Math.min(topsNumFreq[i], bottomsNumFreq[i]);
    }

    return -1;
};