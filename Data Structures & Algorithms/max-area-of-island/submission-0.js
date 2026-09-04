class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const ROWS = grid.length, COLS = grid[0].length;
        let largestIslandLength = 0;
        const visited = new Set();
        
        function bfs(r, c) {
            const q = new Queue();
            visited.add(`${r},${c}`);
            q.push([r, c]);
            let area = 1;

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
                        visited.add(`${tempR},${tempC}`);
                        area += 1;
                    }
                }
            }

            return area;
        }

        for(let r = 0; r < ROWS; r++){
            for (let c = 0; c < COLS; c++){
                if(grid[r][c] == "1" && !visited.has(`${r},${c}`)) {
                    largestIslandLength = Math.max(largestIslandLength, bfs(r, c));
                }
            }
        }

        return largestIslandLength;
    }
}
