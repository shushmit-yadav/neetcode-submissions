class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length, COLS = grid[0].length;

        const q = new Queue();
        const visited = new  Set();
        const INF = 2147483647;

        function bfs(r, c){
            if(
                r < 0 ||
                c < 0 ||
                r >= ROWS ||
                c >= COLS ||
                visited.has(`${r},${c}`) ||
                grid[r][c] == -1
            ) {
                return INF;
            }
            visited.add(`${r},${c}`);
            q.push([r,c]);
        }

        for(let r = 0;r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(grid[r][c] == 0){
                    q.push([r,c]);
                    visited.add(`${r},${c}`);
                }
            }
        }

        let dist = 0;
        while(!q.isEmpty()){
            for(let i = q.size();i > 0;i--){
                const [r,c] = q.pop();
                grid[r][c] = dist;
                bfs(r+1,c);
                bfs(r-1,c);
                bfs(r,c+1);
                bfs(r,c-1);
            }
            dist += 1;
        }
    }
}
