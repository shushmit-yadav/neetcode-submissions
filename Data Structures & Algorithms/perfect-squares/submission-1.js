class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    numSquares(n) {
        // DP Botton Up
        const dp = Array(n+1).fill(n);
        dp[0] = 0;

        for(let t = 1; t <= n; t++){
            for(let s = 1; s * s <= t; s++){
                dp[t] = Math.min(dp[t], 1 + dp[t - s*s]);
            }
        }

        return dp[n];
    }
}
