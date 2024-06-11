/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
// using Trie | Time : O(n * k + m * k) 
// n => n of roots in dictionary, k => average length of root & word, m => n of words in sentence
const replaceWords = function(dictionary, sentence) {
    const trie = new Trie(); 
    const words = sentence.split(' ');

    // sorte roots in the trie
    for (const root of dictionary)
        trie.insert(root);

    // replace each word with the shortest root
    for (let i = 0; i < words.length; i++)
        words[i] = trie.getRoot(words[i]);

    return words.join(' ');
};

class TrieNode {
    constructor() {
        this.isEnd = false;
        this.children = new Array(26).fill(null);
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let curr = this.root;
        for (const char of word) {
            const idx = char.charCodeAt(0) - 97;

            if (curr.children[idx] === null) 
                curr.children[idx] = new TrieNode();

            curr = curr.children[idx];
        }
        curr.isEnd = true;
    }

    getRoot(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            const idx = word.charCodeAt(i) - 97;

            if (curr.children[idx] === null)
                return word;

            curr = curr.children[idx];

            if (curr.isEnd)
                return word.slice(0, i + 1);
                
        }
        return word;
    }
}