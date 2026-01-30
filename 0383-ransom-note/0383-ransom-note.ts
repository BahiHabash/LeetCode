function canConstruct(ransomNote: string, magazine: string): boolean {
    const charFreq = new Map<string, number>();

    for (const char of magazine) {
        charFreq.set(char, (charFreq.get(char) ?? 0) + 1);
    }

    for (const char of ransomNote) {
        const freq: number = charFreq.get(char) ?? 0;

        if (!freq) {
            return false;
        }

        charFreq.set(char, freq - 1);
    }

    return true;
};