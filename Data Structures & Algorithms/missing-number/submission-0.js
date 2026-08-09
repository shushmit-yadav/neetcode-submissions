class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let result = nums.length;
        for (let i = 0; i < nums.length; ++i) {
            result ^= i ^ nums[i];
        }
        return result;
    }
}
