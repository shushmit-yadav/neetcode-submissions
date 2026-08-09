class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsOccurances = {};
        for (let i = 0; i < nums.length; ++i) {
            if(numsOccurances[nums[i]] > 0) {
                return true;
            } else {
                numsOccurances[nums[i]] = 1
            } 
        }   
        return false; 

    }
}
