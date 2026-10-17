class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {
        const cache = {};

        function dfs(i, j){
            let key = `${i}-${j}`;

            if(key in cache){
                return cache[key];
            }

            if(i >= s.length && j >= p.length){
                return true;
            } 
            if(j >= p.length){
                return false;
            }

            const match = i < s.length && (s[i] == p[j] || p[j] == ".");

            if(j+1 < p.length && p[j+1] == "*"){
                cache[key] = dfs(i, j+2) || (match && dfs(i+1, j));
                return cache[key];
            }

            if(match){
                cache[key] = dfs(i+1, j+1);
                return cache[key];
            }

            cache[key] = false;
            return false;
        }

        return dfs(0, 0);
    }
}
