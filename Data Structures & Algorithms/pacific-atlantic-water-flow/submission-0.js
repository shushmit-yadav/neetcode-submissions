class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;

        const pac = Array.from({length:ROWS}, () => Array(COLS).fill(false));
        const atl = Array.from({length: ROWS}, () => Array(COLS).fill(false));

        const pacQueue = new Queue();
        const atlQueue = new Queue();

        // top left boundary
        for(let r = 0; r < ROWS; r++){
            pacQueue.push([r, 0]);
            atlQueue.push([r, COLS - 1]);
        }

        for(let c = 0; c < COLS; c++){
            pacQueue.push([0, c]);
            atlQueue.push([ROWS - 1, c]);
        }
        const directions = [[1,0],[-1,0],[0,1], [0,-1]];
        function bfs(q, ocean, heights) {
            while(!q.isEmpty()){
                let [r,c] = q.pop();
                ocean[r][c] = true;
                for (let [dr,dc] of directions){
                    let nr = r + dr,
                        nc = c + dc;
                    if(nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && !ocean[nr][nc] && heights[nr][nc] >= heights[r][c]){
                            q.push([nr, nc]);
                    }
                }
            }
        }

        bfs(pacQueue, pac, heights);
        bfs(atlQueue, atl, heights);

        let res = [];

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(pac[r][c] && atl[r][c]){
                    res.push([r,c]);
                }
            }
        }

        return res;
    }
}
