class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        for(const  num of nums){
            map[num] = map[num] ? map[num] + 1 : 1;
        }
        const heap = new MinPriorityQueue(x => x[1]);
        for(const [num, count] of Object.entries(map)){
            heap.enqueue([num, count]);
            if(heap.size() > k){
                heap.dequeue();
            }
        }
        const res = [];
        for(let i = 0; i < k; i++){
            const [num,count] = heap.dequeue();
            res.push(num);
        }
        return res;
    }
}
