class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        while(b != 0){
            const temp = (a & b) << 1;
            a = a ^ b;
            b = temp;
        }

        return a;
    }
}
