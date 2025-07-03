function possibleStringCount(word: string): number {
    let numOfPossibleStrings: number = 1;

    for (let i = 0; i < word.length; i++) {
        while (word[i] === word[i + 1]) {
            i++;
            numOfPossibleStrings++;
        }
    }

    return numOfPossibleStrings;
};