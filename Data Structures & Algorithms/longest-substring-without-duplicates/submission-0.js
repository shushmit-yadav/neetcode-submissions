class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLength = 0;
        let l = 0;

        let mp = new Map();
        for(let r = 0;r < s.length;r++){
            if(mp.has(s[r])){
                l =Math.max(mp.get(s[r]) + 1,l);
            }
            mp.set(s[r],r);
            maxLength = Math.max(maxLength, r - l + 1);
        }
        return maxLength;
    }
}
