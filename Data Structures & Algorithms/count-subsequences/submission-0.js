class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const cache = {};
        function dfs(i, j){
            if(j == t.length){
                return 1;
            }
            if(i == s.length){
                return 0;
            }
            const key = `${i}-${j}`;
            if(key in cache){
                return cache[key];
            }
            let res = dfs(i+1, j);
            if(s[i] == t[j]){
                res += dfs(i+1,j+1);
            }
            cache[key] = res;
            return res;
        }

        return dfs(0, 0);
    }
}
