class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const res = [];
        const preMap = new  Map();
        const visit = new Set();
        const cycle = new Set();

        for (let i = 0; i < numCourses; i++){
            preMap.set(i, []);
        }

        for(const [crs, pre] of prerequisites){
            preMap.get(crs).push(pre);
        }

        function dfs(crs){
            if(cycle.has(crs)) return false;
            if(visit.has(crs)) return true;

            cycle.add(crs);

            for(const pre of  preMap.get(crs)){
                if(dfs(pre) == false) return false 
            }

            cycle.delete(crs);
            visit.add(crs);
            res.push(crs);
            return true;
        }

        for(let c = 0; c < numCourses; c++){
            if(dfs(c) == false) return [];
        }
        return res;
    }
}
