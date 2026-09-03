class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {

        if(digits.length == 0) return [];
        let res = [''];
        const digitToChar = {
            "2": "abc",
            "3":"def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        };

        for (const digit of digits){
            const temp = [];
            for(const curStr of res){
                for  (const c of digitToChar[digit]){
                    temp.push(curStr + c);
                }
            }
            res = temp;
        }
        return res;
    }
}
