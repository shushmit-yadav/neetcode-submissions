class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    integerBreak(n) {
        const cache = {1: 1};

        function dfs(num){
            if(num in cache){
                return cache[num];
            }

            cache[num] = num == n ? 0 : num;

            for(let i = 1; i < num; i++){
                const val = dfs(i) * dfs(num - i);
                cache[num] = Math.max(cache[num], val);
            }
            return cache[num];
        }

        return dfs(n);
    }
}
