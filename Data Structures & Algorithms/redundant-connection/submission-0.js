class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {

        const N = edges.length;
        const par = Array.from({length: N + 1}, (_, i) => i);
        const rank = new Array(N + 1).fill(1);

        function find(n){
            let p = par[n];
            while(p !== par[p]){
                par[p] = par[par[p]];
                p = par[p];
            }
            return p;
        }

        function union(n1, n2){
            let p1 = find(n1);
            let p2 = find(n2);

            if(p1 === p2){
                return false;
            }

            if(rank[p1] > rank[p2]){
                par[p2] = p1;
                rank[p1] += rank[p2]
            } else {
                par[p1] = p2;
                rank[p2] += rank[p1];
            }
            return true;
        }

        for(const [u, v] of edges){
            if(!union(u,v)) {
                return [u,v];
            }
        }
        return [];
    }
}
