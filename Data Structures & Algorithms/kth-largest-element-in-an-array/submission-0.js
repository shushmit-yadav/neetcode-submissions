class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const pq = new PriorityQueue((a,b) => a- b);
        for  (const num of nums){
            pq.enqueue(num);
            if(pq.size() > k){
                pq.dequeue();
            }
        }
        return pq.front();
    }
}
