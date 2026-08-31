class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = [];
        candidates.sort((a,b) =>  a - b);
        function dfs(i, curr, total) {
            if(total == target){
                res.push([...curr]);
                return;
            }
            if(i >= candidates.length || total > target){
                return;
            }

            // INCLUDE
            curr.push(candidates[i]);
            dfs(i+1, curr, total + candidates[i]);

            // NOT INCLUDE
            curr.pop();
            while(i + 1 < candidates.length && candidates[i] == candidates[i+1]){
                i = i+1;
            }
            dfs(i+1, curr, total);
        }

        dfs(0, [], 0);
        return res;
    }
}
