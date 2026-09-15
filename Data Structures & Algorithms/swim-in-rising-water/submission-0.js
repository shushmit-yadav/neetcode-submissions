class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const N = grid.length;
        const minHeap = new MinPriorityQueue((a) => a[0]);
        const visit = new Set();
        const directions = [[0,1],[0,-1],[1,0],[-1,0]];

        minHeap.enqueue([grid[0][0], 0, 0]);
        visit.add('0,0');

        while(!minHeap.isEmpty()){
            const [t, r, c] = minHeap.dequeue();
            if(r == N - 1 && c == N-1){
                return t;
            }
            for(const [dr,dc] of directions){
                const neiR = r + dr, 
                    neiC = c + dc;

                if(neiR < 0 || neiC < 0 || neiR == N || neiC == N || visit.has(`${neiR},${ neiC}`)){
                    continue;
                }
                visit.add(`${neiR},${ neiC}`);
                minHeap.enqueue([Math.max(t, grid[neiR][neiC]), neiR, neiC]);
                
            }
        }
    }
}
