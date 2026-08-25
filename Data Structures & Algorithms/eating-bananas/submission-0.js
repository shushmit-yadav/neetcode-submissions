class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let  l = 0, r = Math.max(...piles);
        let res = r;
        while (l <= r) {
            const k = l + Math.floor((r-l)/2);
            let hours = 0;
            for(const pile of piles){
                hours += Math.ceil(pile/k);
            }

            if(hours <= h){
                res = Math.min(res, k);
                r = k - 1;
            } else {
                l = k + 1
            }
        }

        return res;
    }
}
