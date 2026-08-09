class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let finalString = "";
        for (let str of strs) {
            finalString += str.length + "#" + str;
        }
        return finalString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const resultStrs = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str.charAt(j) !== "#") {
                j++;
            }
            let num = Number(str.substring(i, j));
            resultStrs.push(str.slice(j + 1, j + 1 + num));
            i = j + 1 + num;
        }

        return resultStrs;
    }
}