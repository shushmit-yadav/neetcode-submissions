class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const cache = {};
        function backtrack(i, curSum){
            let key = `${i}-${curSum}`;
            if(key in cache) return cache[key];
            if(i == nums.length){
                return curSum == target ? 1 : 0;
            }

            cache[key] = backtrack(i+1, curSum + nums[i]) + backtrack(i+1, curSum - nums[i]);
            return cache[key];
        }

        return backtrack(0, 0);
    }

}
