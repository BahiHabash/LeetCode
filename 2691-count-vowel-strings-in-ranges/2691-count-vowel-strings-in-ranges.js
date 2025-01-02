/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
function vowelStrings (words, queries) {
    const isVowel = char => 'aeiou'.includes(char);

    let count = 0;
    const prefixVowels = new Array(words.length).fill(0);

    for (const [i, word] of words.entries()) {
        if ( isVowel(word.at(0)) && isVowel(word.at(-1)) )
            count++;

        prefixVowels[i] = count;
    }


    return queries.map(([start, end]) =>
        prefixVowels[end] - (prefixVowels[start - 1] ?? 0)
    );
};


