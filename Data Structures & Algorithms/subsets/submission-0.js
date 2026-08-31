class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];

        const subset= [];

        function dfs(i){
            if(i >= nums.length){
                result.push([...subset]);
                return;
            }

            //include i 
            subset.push(nums[i]);
            dfs(i+1);

            // not include i 
            subset.pop();
            dfs(i+1);
        }
        dfs(0);
        return result;
    }
}
