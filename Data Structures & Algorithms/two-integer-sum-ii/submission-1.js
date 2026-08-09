class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = new Map();
        
        for (let i = 0; i < numbers.length; i++) {
            const temp = target - numbers[i];
            if (map.has(temp)) {
                return [map.get(temp), i + 1];
            } 
            map.set(numbers[i],i+1);
        }

        return []
    }
}
