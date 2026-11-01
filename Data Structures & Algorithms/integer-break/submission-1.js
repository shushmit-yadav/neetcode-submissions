class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    integerBreak(n) {
        const cache = {1:1};

        for(let i = 2; i <= n+1; i++){
            cache[i] = i == n ? 0 : i;
            for(let j = 1;j < i; j++){
                const val = cache[j] * cache[i - j];
                cache[i] = Math.max(cache[i], val);
            }
        }
        return cache[n];
    }
}
