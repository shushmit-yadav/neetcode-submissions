class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxPQ = new MaxPriorityQueue();
        for (const a of  stones){
            maxPQ.enqueue(a);
        }

        while(maxPQ.size() > 1){
            let a1= maxPQ.dequeue();
            let a2 = maxPQ.dequeue();
            if(a1 !== a2){
                maxPQ.enqueue(Math.abs(a1 - a2));
            }
        }
        return maxPQ.size() == 1 ? maxPQ.dequeue() : 0;
    }
}
