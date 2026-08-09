class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const newSet = new Set(nums);
        let longest = 0;

        for (let num of newSet){
            if(!newSet.has(num - 1)) {
                let length = 1;
                while(newSet.has(num+length)){
                    length++;
                }
                longest = Math.max(longest,length);
            }
        }
        return longest;
    }
}
