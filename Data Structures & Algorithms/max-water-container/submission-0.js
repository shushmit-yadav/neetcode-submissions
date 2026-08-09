class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0,r = heights.length - 1;
        let res = 0;
        while (l < r){
            const area = (r - l) * Math.min(heights[l], heights[r]);
            res = Math.max(res, area);

            if (heights[l] < heights[r]){
                l++
            } else {
                r--;
            }
        }
        return res;
    }
}
