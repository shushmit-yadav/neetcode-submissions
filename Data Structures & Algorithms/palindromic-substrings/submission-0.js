class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = 0;

        function countPali(s, l, r) {
            while(l >= 0 && r < s.length && s[l] == s[r]){
                res++;
                l--;
                r++;
            }
        }

        for(let i = 0; i < s.length; i++){
            countPali(s, i, i);
            countPali(s, i, i + 1);
        }

        return res;
    }


}
