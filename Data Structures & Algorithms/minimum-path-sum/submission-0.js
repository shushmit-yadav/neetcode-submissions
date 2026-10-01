class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    minPathSum(grid) {
        const M = grid.length,
            N = grid[0].length;

        const dp = Array.from({length: M + 1},() => Array(N+1).fill(Infinity));
        dp[M-1][N] = 0;
        for(let i = M-1; i >= 0; i--){
            for(let j = N-1; j >= 0; j--){
                dp[i][j] = grid[i][j] + Math.min(dp[i+1][j],dp[i][j+1]);
            }
        }
        return dp[0][0];
    }
}
