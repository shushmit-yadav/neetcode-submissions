class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let length = 0, l = 0;

        for(let r = 0;r < s.length; r++){
            while(set.has(s[r])){
                set.delete(s[l]);
                l++;
            }
            set.add(s[r]);
            length = Math.max(length,r - l + 1);
        }
        return length;
    }
}
