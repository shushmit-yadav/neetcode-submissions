class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        const ROWS = matrix.length,
            COLS = matrix[0].length;

        let cache = {};

        function dfs(r, c, prevVal){
            let key = `${r}-${c}`;
            if(r < 0 || c < 0 || r == ROWS || c == COLS || matrix[r][c] <= prevVal){
                return 0;
            }

            if(key in cache){
                return cache[key];
            }

            let res = 1;
            res = Math.max(res, 1 + dfs(r + 1, c, matrix[r][c]));
            res = Math.max(res, 1 + dfs(r - 1, c, matrix[r][c]));
            res = Math.max(res, 1 + dfs(r, c + 1, matrix[r][c]));
            res = Math.max(res, 1 + dfs(r, c - 1, matrix[r][c]));

            cache[key] = res;
            return res;
        }
        let LIP = 0; 
        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                LIP = Math.max(LIP, dfs(r, c, -1));
            }
        }
        return LIP;
    }
}
