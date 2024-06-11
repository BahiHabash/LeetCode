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
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let curr = this.root;
        for (const char of word) {
            if (!curr.children.has(char))
                curr.children.set(char, new TrieNode());
            curr = curr.children.get(char);
        }
        curr.isEnd = true;
    }

    getRoot(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!curr.children.has(char))
                return word;
            
            curr = curr.children.get(char);

            if (curr.isEnd)
                return word.slice(0, i + 1);
        }
        return word;
    }
}