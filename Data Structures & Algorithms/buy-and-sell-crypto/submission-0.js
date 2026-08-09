class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let  maxProfit = 0;
        let l = 0, r = 1;
        while(r < prices.length){
            if (prices[r] > prices[l]){
                const currProfit =  prices[r] - prices[l];
                maxProfit = Math.max(maxProfit, currProfit);
            } else {
                l = r
            }
            r++;
        }
        return maxProfit;
    }
}
