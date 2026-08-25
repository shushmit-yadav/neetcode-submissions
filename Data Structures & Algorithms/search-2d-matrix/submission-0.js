class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROWS = matrix.length, COLS = matrix[0].length;

        let top = 0, bott = ROWS - 1;
        while(top <= bott) {
            let mid = top + Math.floor((bott-top)/2);
            
            if (target < matrix[mid][0]) {
                bott = mid - 1;
            } else if(target > matrix[mid][COLS - 1]) {
                top = mid + 1
            } else {
                break;
            }
        }

        if (!(top <= bott)){
            return false;
        }

        const row = top + Math.floor((bott-top)/2);
        let l = 0,r = COLS - 1;

        while (l <= r){
            const m = l + Math.floor((r-l)/2);
            if(target < matrix[row][m]){
                r = m - 1;
            } else if(target > matrix[row][m]){
                l = m + 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
