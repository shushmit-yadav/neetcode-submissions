class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const N = nums.length;
        for(let i = 0; i < N; i++){
            if(nums[i] < 0){
                nums[i] = 0;
            }
        }

        for(let i = 0; i < N; i++){
            const  val = Math.abs(nums[i]);
            if(val >= 1 && val <= N){
                if(nums[val - 1] > 0){
                    nums[val - 1] *= -1;
                } else if(nums[val - 1] === 0){
                    nums[val - 1] = -1 * (N+1);
                }
            }
        }

        for(let i = 0; i <= N; i++){
            if(nums[i-1] >= 0){
                return i;
            }
        }

        return N+1;
    }
}
