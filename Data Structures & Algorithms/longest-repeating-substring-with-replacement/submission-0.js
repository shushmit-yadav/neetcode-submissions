class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let mp = new Map();
        let l = 0;
        let res=0, maxf=0;
        for (let r = 0; r < s.length; r++){
            mp.set(s[r], (mp.get(s[r]) || 0) + 1);
            maxf = Math.max(maxf, mp.get(s[r]));
            while((r-l+1) - maxf > k) {
                mp.set(s[l], mp.get(s[l]) - 1);
                l++;
            }
            res = Math.max(res, r-l+1);
        }
        return res;
    }
}
