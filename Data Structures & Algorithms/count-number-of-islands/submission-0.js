class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let noOfIslands = 0;
        const visited = new Set();
        const ROWS = grid.length,COLS = grid[0].length;
        
        function bfs(r,c) {
            const q = new Queue();
            visited.add(`${r},${c}`);
            q.push([r, c]);

            while(!q.isEmpty()){
                const [row, col] = q.pop();
                const directions = [[-1,0],[1,0],[0,-1],[0,1]];

                for (const [dr,dc] of directions){
                    const tempR = row + dr;
                    const tempC = col + dc;

                    if(
                        tempR >= 0 && 
                        tempR < ROWS &&
                        tempC >= 0 &&
                        tempC < COLS &&
                        grid[tempR][tempC] == "1" &&
                        !visited.has(`${tempR},${tempC}`) 
                    ){
                        q.push([tempR,tempC]);
                        visited.add(`${tempR},${tempC}`)
                    }
                }
            }
        }

        for(let r = 0;r < ROWS; r++) {
            for  (let c = 0; c < COLS; c++){
                if(grid[r][c] == "1" && !visited.has(`${r},${c}`)){
                    bfs(r,c);
                    noOfIslands += 1;
                }   
            }
        }

        return noOfIslands;
    }
}
