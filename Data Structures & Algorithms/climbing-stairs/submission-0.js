class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let one = 1,two = 1;
        for(let i = 0; i < n-1;i++){
            let tmp = one;
            one = one + two;
            two = tmp;
        }

        return one;
    }
}
