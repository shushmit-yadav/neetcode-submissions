class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const res = [];
        nums.sort((a,b) => a - b);
        function subset(i, curr){
            if(i >= nums.length){
                res.push([...curr]);
                return 
            }

            // include ith
            curr.push(nums[i]);
            subset(i+1, curr);

            // do not include
            curr.pop();
            while(nums[i] == nums[i+1]){
                i++;
            }
            subset(i+1,curr);
        }

        subset(0,[]);

        return res;
    }
}
