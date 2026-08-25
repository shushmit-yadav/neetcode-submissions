class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1;

        while(l<=r){
            let m = l+ Math.floor((r-l)/2);
            if(target == nums[m]){
                return m;
            }

            // left sorted array
            if(nums[l] <= nums[m]){
                if(target > nums[m] || target < nums[l]){
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            } else {
                // right sorted array
                if(target < nums[m] || target > nums[r]){
                    r = m - 1
                } else  {
                    l = m + 1;
                }
            }
        }
        return -1;
    }
}
