class Solution {
    /**
     * @param {number[]} piles
     * @return {boolean}
     */
    stoneGame(piles) {
        const n = piles.length;
        const dp = new Array(n).fill(0);

        for(let l = n-1; l >= 0; l--){
            for(let r = l; r < n; r++){
                const even = (r-l) % 2 === 0;
                const left = even ? piles[l] : 0;
                const right = even ? piles[r] :  0;

                if(l === r){
                    dp[r] = left;
                } else {
                    dp[r] = Math.max(dp[r] + left, dp[r-1] + right);
                }
            }
        }

        const total = piles.reduce((a,b) => a+b, 0);
        const aliceScore = dp[n-1];
        return aliceScore > total - aliceScore;
    }
}
