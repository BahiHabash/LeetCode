function getLongestSubsequence(words: string[], groups: number[]): string[] {
    const outputIdx: number[] = [0];

    for (let i = 1; i < words.length; i++) {
        if (groups[i] !== groups[outputIdx.at(-1)]) {
            outputIdx.push(i);
        }
    }

    return outputIdx.map(idx => words[idx]);
};