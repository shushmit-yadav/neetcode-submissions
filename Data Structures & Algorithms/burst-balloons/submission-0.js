class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        let n = nums.length;
        let newNums = new Array(n+2).fill(1);
        for(let i = 0;i < n; i++){
            newNums[i+1] = nums[i];
        }

        let dp = {};

        function dfs(l, r){
            let key = `${l}-${r}`;
            if(l > r) {
                return 0;
            }
            
            if(key in dp) { 
                return dp[key];
            }

            dp[key] = 0;

            for(let i = l; i <= r; i++){
                let coins = newNums[l-1] * newNums[i] * newNums[r+1];
                coins += dfs(l, i-1) + dfs(i+1, r);

                dp[key] = Math.max(dp[key], coins);
            }
            return dp[key];
        }
        return dfs(1, newNums.length - 2);
    }
}
