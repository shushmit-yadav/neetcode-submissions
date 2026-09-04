class TrieNode {
    constructor(){
        this.children = new Map();
        this.isEndOfWord = false;
    }

    addWord(word){
        let curr = this;
        for (let c of word){
            if(!curr.children.has(c)){
                curr.children.set(c, new TrieNode());
            }
            curr = curr.children.get(c);
        }

        curr.isEndOfWord = true;
    }
}
class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        let root = new TrieNode();

        for(const word of words){
            root.addWord(word);
        }

        const ROWS = board.length, COLS = board[0].length;
        const visited = new Set();
        const res = new Set();
        // DFS 
        function dfs(r,c, node, word){
            if(
                r < 0 || 
                c < 0 || 
                r >= ROWS || 
                c >= COLS || 
                !(node.children.has(board[r][c])) || 
                visited.has(`${r},${c}`)
            ) {
                return;
            }

            visited.add(`${r},${c}`);
            node = node.children.get(board[r][c]);
            word += board[r][c];

            if(node.isEndOfWord){
                res.add(word);
            }
            dfs(r + 1, c, node, word);
            dfs(r - 1, c, node, word);
            dfs(r, c + 1, node, word);
            dfs(r, c - 1, node, word);
            visited.delete(`${r},${c}`);
        }

        for(let r = 0; r < ROWS; r++){
            for (let c = 0; c < COLS; c++){
                dfs(r, c, root, "");
            }
        }

        return Array.from(res);
    }
}
