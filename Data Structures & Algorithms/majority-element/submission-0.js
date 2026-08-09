class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const elementCounts = {};
        for (let i = 0; i < nums.length; i++) {
            if (!elementCounts[nums[i]]) {
                elementCounts[nums[i]] = 0;   
            }  
            elementCounts[nums[i]] += 1;
        }

        const mejorityElement = nums.length / 2;
        let result = 0;
        for (let key of Object.keys(elementCounts)) {
            if (elementCounts[key] >= mejorityElement) {
                result = key;
                break;
            }
        }
        return result;
    }
}
