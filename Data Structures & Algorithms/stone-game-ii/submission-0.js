class Solution {
    /**
     * @param {number[]} piles
     * @return {number}
     */
    stoneGameII(piles) {
        const n = piles.length;
        const  sufixSum = Array(n).fill(0);
        sufixSum[n-1] = piles[n-1];

        for(let i = n-2; i >= 0; i--){
            sufixSum[i] = piles[i] + sufixSum[i+1];
        }

        const dp = Array.from({length: n+1}, () =>Array(n+1).fill(0));

        for(let i = n-1; i >= 0; i--){
            for(let M = 1; M <= n; M++){
                for(let X = 1; X <= 2 * M; X++){
                    if(i+X > n) break;
                    dp[i][M] = Math.max(dp[i][M], sufixSum[i] - dp[i+X][Math.max(M, X)]);
                }
            }
        }

        return dp[0][1];
    }
}
