class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeightII(stones) {
        const totalSum = stones.reduce((a,b) => a+b, 0);
        const target = Math.ceil(totalSum / 2);

        const dp = Array.from({length: stones.length}, () => Array(target + 1).fill(-1));

        function dfs(i, total){
            if(total >= target || i == stones.length){
                return Math.abs(total - (totalSum - total));
            }
            if(dp[i][total] !== -1){
                return dp[i][total];
            }
            dp[i][total] = Math.min(dfs(i+1, total), dfs(i+1, total + stones[i]));

            return dp[i][total];
        }

        return dfs(0, 0);
    }
}
