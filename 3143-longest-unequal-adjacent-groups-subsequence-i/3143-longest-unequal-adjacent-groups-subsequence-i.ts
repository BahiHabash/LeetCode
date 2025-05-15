function getLongestSubsequence(words: string[], groups: number[]): string[] {
    const output: string[] = [];

    for (let i = 0; i < words.length; i++) {
        if (groups[i] === groups[i + 1]) continue;

        output.push(words[i]);
    }

    return output;
};