function kthCharacter(k: number, word: string = 'a'): string {
    if (word.length >= k) {
        return word[k - 1];
    }

    let appendedWord: string = '';

    for (const char of word) {
        appendedWord += String.fromCharCode( ((char.charCodeAt(0) + 1) % 97) + 97 );
    }
    
    return kthCharacter(k, word + appendedWord);
}
