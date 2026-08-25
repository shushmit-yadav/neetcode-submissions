class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let [left, right] = [0, nums.length - 1]
        let mid
        while (left < right) {
            mid = Math.floor((left + right)/2)
            if (nums[right] < nums[mid]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        const rotationAmt = left
        const unRotated = [...nums.slice(rotationAmt), ...nums.slice(0, rotationAmt)]

        left = 0;
        right = nums.length - 1
        while (left < right) {
            mid = Math.floor((left + right) /2)
            if (unRotated[mid] < target) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        const output = (left + rotationAmt) % nums.length
        if (nums[output] != target) {
            return -1
        } else {
            return output
        }
    }
}
