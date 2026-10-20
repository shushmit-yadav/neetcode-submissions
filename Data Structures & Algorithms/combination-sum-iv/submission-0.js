class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    combinationSum4(nums, target) {
        nums.sort((a,b) => a - b);

        const dp = {};
        dp[target] = 1;

        for(let total = target; total > 0; total--){
            for(const num of nums){
                if(total < num) break;
                dp[total - num] = (dp[total - num] || 0) + (dp[total] || 0);
            }
        }

        return dp[0] || 0;
    }
}
