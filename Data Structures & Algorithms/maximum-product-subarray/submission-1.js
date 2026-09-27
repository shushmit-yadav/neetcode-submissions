class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = nums[0];
        let curMax = 1, curMin = 1;
        for(const num of nums){
            let tmp = curMax * num;
            curMax = Math.max(Math.max(num * curMax,num* curMin), num);
            curMin = Math.min(Math.min(tmp, num * curMin), num);
            res = Math.max(res, curMax);
        }
        return res;
    }
}
