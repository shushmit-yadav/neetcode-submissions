class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let res = nums[0];
        for (let i = 1; i < nums.length; i++){
            if (nums[i] < nums[i-1]){
                res = nums[i];
            }
        }
        return res;
    }
}
