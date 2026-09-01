class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        
        function backtrack(openN, closeN, stack){
            if(openN == closeN && openN == n){
                res.push(stack);
            }

            if(openN < n){
                backtrack(openN+1, closeN, stack + '(');
            }

            if(closeN < openN){
                backtrack(openN, closeN + 1, stack + ')');
            }
        }

        backtrack(0, 0, '');
        return res;
    }
}
