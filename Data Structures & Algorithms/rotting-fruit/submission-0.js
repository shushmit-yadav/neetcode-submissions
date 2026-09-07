class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        let fresh = 0;
        const q = new Queue();

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(grid[r][c] == 1){
                    fresh += 1;
                }
                if(grid[r][c] == 2){
                    q.push([r,c]);
                }
            }
        }
        const directions = [[1,0], [-1,0], [0,1], [0,-1]];
        let time = 0;
        while(fresh > 0 && !q.isEmpty()){
            for(let i = q.size(); i > 0; i--){
                const [r,c] = q.pop();
                for(let [dr,dc] of directions){
                    let row = r + dr;
                    let col = c + dc;

                    if(row >=0 && row < ROWS && col >=0 && col < COLS && grid[row][col] == 1){
                        grid[row][col] = 2;
                        q.push([row, col]);
                        fresh--;
                    }
                }
            }
            time++;
        }

        return fresh > 0 ? -1 : time;
    }
}
