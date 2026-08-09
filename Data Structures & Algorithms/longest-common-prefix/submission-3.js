class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let commonPrefix = strs[0];
        for (let i = 1; i < strs.length; i++) {
            if (strs[i].trim().length == 0) {
                commonPrefix = "";
                break;
            } else {
                let j = 0;
                while (j < Math.min(commonPrefix.length, strs[i].length)) {
                    if (commonPrefix.charAt(j) !== strs[i].charAt(j)) {
                        break;
                    } 
                    j++;
                    
                        
                }
                commonPrefix = strs[i].slice(0, j);
            }
        }

        return commonPrefix;
    }
}
