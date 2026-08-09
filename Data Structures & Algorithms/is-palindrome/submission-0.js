class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.split(" ").join("").toLowerCase();
        let start = 0;
        let end = s.length - 1;

        while (start < end) {
            while(start < end && !this.alphaNum(s[start])) {
                start++;
            } 
            while (end > start && !this.alphaNum(s[end])) {
                end--;
            }
            if (s[start].toLowerCase() !== s[end].toLowerCase()) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }

    alphaNum(c) {
        return ((c >='A'&& c <="Z") || (c >="a" && c <= "z") || (c >= '0' && c <= "9"));
    }
}
