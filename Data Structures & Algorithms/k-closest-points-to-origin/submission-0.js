class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const  minPQ = new PriorityQueue((a,b) => a[0] - b[0]);

        for(const [x,y] of points){
            const d = x**2 + y**2;
            minPQ.enqueue([d, x, y]);
        }

        const res = [];
        for (let i = 0;i < k; i++){
            const [_,x, y] = minPQ.dequeue();
            res.push([x,y]);
        }
        return res;
    }
}
