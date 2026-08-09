class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefixArr = [], sufixArr = [];
        let length = nums.length;
        prefixArr[0] = 1; 
        sufixArr[length - 1] = 1;
        const result = [];
        for (let i = 1; i < nums.length; i++) {
            prefixArr[i] = prefixArr[i-1] * nums[i-1];
        }

        for (let i = length - 2; i >= 0; i--) {
            sufixArr[i] = sufixArr[i+1] * nums[i+1];
        }

        for (let i = 0; i < length; i++) {
            result[i] = prefixArr[i] * sufixArr[i]
        }

        return result;
    }
}
