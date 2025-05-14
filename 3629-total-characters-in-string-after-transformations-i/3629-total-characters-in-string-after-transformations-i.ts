function lengthAfterTransformations(s: string, t: number): number {
    const MOD = 1_000_000_007;
    const LETTERS_LENGTH = 26;
    const a_ASCII_CODE = 'a'.charCodeAt(0);

    let charFreq: number[] = new Array(LETTERS_LENGTH).fill(0);

    for (const char of s) {
        const idx = char.charCodeAt(0) - a_ASCII_CODE;
        charFreq[idx]++;
    }

    for (let step = 0; step < t; step++) {
        const newFreq = new Array(LETTERS_LENGTH).fill(0);
        for (let i = 0; i < LETTERS_LENGTH; i++) {
            const freq = charFreq[i];
            if (i === 25) { // 'z'
                newFreq[0] = (newFreq[0] + freq) % MOD; // 'a'
                newFreq[1] = (newFreq[1] + freq) % MOD; // 'b'
            } else {
                newFreq[i + 1] = (newFreq[i + 1] + freq) % MOD;
            }
        }
        charFreq = newFreq;
    }

    let totalLength = 0;
    for (const freq of charFreq) {
        totalLength = (totalLength + freq) % MOD;
    }

    return totalLength;
}
