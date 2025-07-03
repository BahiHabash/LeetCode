function kthCharacter(k: number): string {
    let word: string = 'a';

    while (word.length < k) {
        word = updateWord(word);
    }
    
    return word[k - 1];
}

function updateWord(word: string): string {
    let appendedWord: string = '';

    for (const char of word) {
        appendedWord += String.fromCharCode( ((char.charCodeAt(0) + 1) % 97) + 97 );
    }

    return word + appendedWord;
}