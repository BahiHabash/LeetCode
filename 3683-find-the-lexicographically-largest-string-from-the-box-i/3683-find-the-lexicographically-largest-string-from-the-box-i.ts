function answerString(word: string, numFriends: number): string {
    if (numFriends === 1) return word;
    
    let largestChar: string = '';

    for (let i = 0; i < word.length; i++) {
        if (word[i] > largestChar) {
            largestChar = word[i];
        }
    }
    
    let lexLargestStr: string = '';

    for (let i = 0; i < word.length; i++) {
        if (word[i] === largestChar) {
            // get the endIdx of the longest possible string
            const endIdx: number = Math.min(
                word.length,
                i + (word.length - numFriends + 1) 
            );

            const currStr: string = word.slice(i, endIdx);
            
            if (currStr > lexLargestStr) {
                lexLargestStr = currStr;
            }
        }
    }


    return lexLargestStr;
};