function lengthAfterTransformations(s: string, t: number): number {
    const MOD = 1_000_000_007;
    const LETTERS_LENGTH = 26;
    const a_ASCII_CODE = 'a'.charCodeAt(0);

    let charFreq: number[] = new Array(LETTERS_LENGTH).fill(0);

    for (const char of s) {
        const charIdx = char.charCodeAt(0) - a_ASCII_CODE;
        charFreq[charIdx]++;
    }

    for (let i = t; i > 0; i--) {
        const currTrans: number[] = new Array(LETTERS_LENGTH).fill(0);

        for (const [charIdx, freq] of charFreq.entries()) {
            if (charIdx === 25) { // 'z' -> 'a' + 'b'
                currTrans[0] += freq % MOD;
                currTrans[1] += freq % MOD;
            } else {
                currTrans[charIdx + 1] += freq % MOD;
            }
        }

        charFreq = currTrans;
    }

    let finalLength = 0;

    for (let i = 0; i < LETTERS_LENGTH; i++) {
        finalLength = (finalLength + charFreq[i]) % MOD;
    }

    return finalLength;
}
