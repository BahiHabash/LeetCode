function findWordsContaining(words: string[], x: string): number[] {
    const arr: number[] = [];

    for (let i = 0; i < words.length; i++) {
        if ( words[i].indexOf(x) !== -1 ) {
            arr.push(i);
        }
    }

    return arr;
};