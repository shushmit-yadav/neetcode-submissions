class TrieNode {
    constructor(){
        this.children = new Map();
        this.endOfWord = false;
    }
}
class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;

        for(let c of word){
            if(!curr.children.has(c)){
                curr.children.set(c,new TrieNode());
            }

            curr = curr.children.get(c); 
        }
        curr.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function dfs(i, root){
            let curr = root;

            for (let j = i; j < word.length; j++){
                const c = word[j];
                if(c == '.'){

                    for(const child of  curr.children.values()){
                        if(dfs(j+1, child)){
                            return true;
                        }
                    }
                    return false;

                } else {
                    if(!curr.children.has(c)){
                        return false;
                    }
                    curr = curr.children.get(c); 
                }
            }
            return curr.endOfWord;
        }

        return dfs(0, this.root);
    }
}
