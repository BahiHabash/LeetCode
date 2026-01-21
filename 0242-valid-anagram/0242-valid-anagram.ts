function isAnagram(s: string, t: string): boolean {
    const charsCount = new Map<string, number>();

    for (const char of s) {
        charsCount.set(char, (charsCount.get(char) || 0) + 1);
    }

    for (const char of t) {
        const currCount: number = charsCount.get(char);

        if (!currCount) {
            return false;
        } else if (currCount === 1) {
            charsCount.delete(char);
        } else {
            charsCount.set(char, currCount - 1);
        }
    }

    return charsCount.size === 0;
};