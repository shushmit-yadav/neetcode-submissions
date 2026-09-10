class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const parent = Array.from({length: n},(_,i) => i);
        const rank = Array(n).fill(1);

        function find(node){
            let curr = node;
            while(curr !== parent[curr]){
                parent[curr] = parent[parent[curr]];
                curr = parent[curr];
            }
            return curr;
        } 

        function union(u,v){
            let pu = find(u);
            let pv = find(v);

            if(pu == pv){
                return false;
            }

            if(rank[pv] > rank[pu]){
                [pu, pv] = [pv, pu];
            }

            parent[pv] = pu;
            rank[pu] += rank[pv];
            return true;
        }

        let res = n;

        for(const [u,v] of edges){
            if(union(u,v)){
                res--;
            }
        }
        return res;
    }
}
