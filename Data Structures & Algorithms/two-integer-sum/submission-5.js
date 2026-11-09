class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {};
        for(let i = 0;i < nums.length; i++){
            map[nums[i]] = i;
        }

        for(let i = 0; i < nums.length; i++){
            const diff = target - nums[i];
            if(diff in map && map[diff] !== i && map[diff] !== undefined){
                return [i, map[diff]];
            }
        }
        return []
    }
}
