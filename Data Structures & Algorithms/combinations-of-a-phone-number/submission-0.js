class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const res = [];
        const digitToChar = {
            "2": "abc",
            "3":"def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        }

        function backtrack(i,curStr){
            if(curStr.length == digits.length){
                res.push(curStr);
                return;
            }

            for(let c of digitToChar[digits[i]]){
                backtrack(i+1, curStr + c);
            }
        }

        if(digits.length > 0){
            backtrack(0, "");
        }

        return res;
    }

}
