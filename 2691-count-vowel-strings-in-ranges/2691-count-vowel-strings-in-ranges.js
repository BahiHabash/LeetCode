/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
function vowelStrings (words, queries) {
    const isVowel = char => 'aeiou'.includes(char);
    
    let count = 0;
    const prefixVowels = new Map([[-1, count]]);

    for (const [i, word] of words.entries()) {
        if ( isVowel(word.at(0)) && isVowel(word.at(-1)) )
            count++;

        prefixVowels.set(i, count);
    }

    return queries.map(([start, end]) =>
        prefixVowels.get(end) - prefixVowels.get(start - 1)
    );
};


