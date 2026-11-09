class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let l = 0;
        const N = s.length;
        const  map = {};
        while(l < N){
            if(!(s[l] in map)){
                map[s[l]] = 0;
            }
            map[s[l]] = map[s[l]] + 1;
            if(!(t[l] in map)){
                map[t[l]] = 0;
            }
            map[t[l]] = map[t[l]] - 1;

            l++;
        }
        
        for(const value of Object.values(map)){
            if(value !== 0){
                return false;
            }
        }
        return true;

    }
}
