class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};
        for(const  num of nums){
            freq[num] = (freq[num] | 0) + 1;
        }
        const heap = new MinPriorityQueue(x => x[1]);

        for(const [num, count] of Object.entries(freq)){
            heap.enqueue([num,count]);
            if(heap.size() > k){
                heap.dequeue();
            }
        }

        const res = [];
        while(!heap.isEmpty()){
            res.push(heap.dequeue()[0]);
        }

        return res;
    }
}
