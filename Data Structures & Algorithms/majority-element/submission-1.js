class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let result = 0, count = 0;
        for (let num of nums) {
            if (count == 0) {
                result = num;
            }

            if (result == num) {
                count = count + 1;
            } else {
                count = count - 1;
            }
        }
        return result;
    }
}
