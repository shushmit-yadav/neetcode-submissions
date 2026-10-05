class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const cache = {};

        function dfs(i,a){
            let key = `${i}-${a}`;
            if(a == amount){
                return 1;
            }
            if(a > amount || i >= coins.length){
                return 0;
            }
            if(key in cache){
                return cache[key];
            }
            cache[key] = dfs(i, a + coins[i]) + dfs(i+1, a);
            return cache[key];
        }

        return dfs(0, 0);
    }
}
