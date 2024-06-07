/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
const replaceWords = function(dictionary, sentence) {
    dictionary.sort((a, b) => a.length - b.length);
    
    const map = new Map();
    for(const root of dictionary)
        map.set(root[0], (map.get(root[0]) ?? '') + root + ',');

    const words = sentence.split(' ');

    for (const [i, word] of words.entries()) {
        if (map.has(word[0])) {
            const roots = map.get(word[0]).split(','); 
            roots.pop(); // remove the empty root
            for (const root of roots) {
                if (word.startsWith(root)){
                    words[i] = root;
                    break;
                }
            }
        }
    }

    return words.join(' ');
};