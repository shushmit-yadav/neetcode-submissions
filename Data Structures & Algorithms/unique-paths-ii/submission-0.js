class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        const M = grid.length,
            N = grid[0].length;
        const dp = Array.from({ length: M }, () => Array(N).fill(-1));

        const dfs = (r, c) => {
            if (r === M || c === N || grid[r][c] === 1) {
                return 0;
            }
            if (r === M - 1 && c === N - 1) {
                return 1;
            }
            if (dp[r][c] !== -1) {
                return dp[r][c];
            }
            dp[r][c] = dfs(r + 1, c) + dfs(r, c + 1);
            return dp[r][c];
        };

        return dfs(0, 0);
    }
}