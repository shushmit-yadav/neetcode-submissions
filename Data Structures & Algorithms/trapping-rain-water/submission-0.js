class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (!height.length) return 0;
        let  l = 0, r = height.length - 1;
        let maxL = height[l], maxR = height[r];
        let totalSum = 0;
        while (l < r) {
            if (maxL < maxR){
                l++;
                maxL = Math.max(maxL, height[l]);
                totalSum += (maxL - height[l]);
            } else {
                r--;
                maxR = Math.max(maxR, height[r]);
                totalSum += (maxR - height[r]);
            }
        }
        return totalSum;
    }
}
